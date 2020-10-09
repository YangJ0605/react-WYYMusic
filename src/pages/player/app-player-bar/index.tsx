import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

import { getSizeImage, getPlaySong } from '@/utils/format'

import { getDetailSongAction, changeSequenceAction, changeMusicAction, changeCurrentLyricIndexAction } from '../store/actionCreator'
import { RootState } from '@/store/reducer'

import { Slider, Popover, message } from 'antd'
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default memo(function AppPlayerVar() {
    const dispatch = useDispatch()
    const audioRef = useRef<HTMLAudioElement>(null)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [progress, setProgress] = useState<number>(0)
    const [isChanging, setIsChanging] = useState<boolean>(false)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [isVolumShow, setIsVolumShow] = useState<boolean>(false)
    const [volum, setVolum] = useState<number>(100)

    const { currentSong, sequence, lyricList, currentLyricIndex } = useTypedSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong']),
        sequence: state.getIn(['player', 'sequence']),
        lyricList: state.getIn(['player', 'lyricList']),
        currentLyricIndex: state.getIn(['player', 'currentLyricIndex'])
    }))
    useEffect(() => {
        dispatch(getDetailSongAction(1398663411))
    }, [dispatch])

    useEffect(() => {
        audioRef.current!.src = getPlaySong(currentSong.id)
        // audioRef.current!.play().then(_ => {
        //     console.log('play sucess')
        // }).catch(_ => {
        //     console.log('play fail')
        // })
        if (isPlaying) {
            audioRef.current!.play()
        }
        // eslint-disable-next-line
    }, [currentSong])

    // useEffect(() => {
    //     if (isPlaying) {
    //         audioRef.current!.play()
    //     }
    // }, [isPlaying])

    const playMusic = useCallback(() => {
        isPlaying ? audioRef.current!.pause() : audioRef.current!.play()
        // console.log(audioRef.current!.currentTime)
        setIsPlaying(!isPlaying)
    }, [isPlaying])

    const handleAudioTimeUpdate = useCallback((e) => {
        const currentTime = e.target.currentTime
        // console.log('currentTime', currentTime)
        if (!isChanging) {
            setCurrentTime(currentTime * 1000)
            setProgress(currentTime * 1000 / currentSong.dt * 100)
        }
        let i = 0
        // console.log('i', currentLyricIndex)
        // console.log('lyricList', lyricList)
        // console.log('lyricList[i]', lyricList[i])
        for (; i < lyricList.length; i++) {
            if (currentTime * 1000 < lyricList[i].time) {
                break
            }
        }
        if (currentLyricIndex !== i - 1) {
            if (i - 1 < 0) i = 1
            dispatch(changeCurrentLyricIndexAction(i - 1))
            const content = lyricList[i - 1] && lyricList[i - 1].content
            if (content && currentTime) {
                message.open({
                    content: content,
                    duration: 0,
                    icon: <div></div>,
                    type: 'success',
                    key: 'lyric',
                    className: "lyric-class"
                })
            }
        }
    }, [currentSong, isChanging, lyricList, dispatch, currentLyricIndex])

    const handleSliderChange = useCallback((value: number) => {
        setIsChanging(true)
        const currentTime = value / 100 * currentSong.dt
        setCurrentTime(currentTime)
        setProgress(value)
    }, [currentSong])
    const handleSilerAfterChange = useCallback((value: number) => {
        const currentTime = value / 100 * currentSong.dt / 1000
        audioRef.current!.currentTime = currentTime
        setIsChanging(false)
        if (!isPlaying) playMusic()
    }, [currentSong, isPlaying, playMusic])
    const handleVolumClick = useCallback(() => {
        setIsVolumShow(!isVolumShow)
    }, [isVolumShow])
    const handleVolumChange = useCallback((value: number) => {
        audioRef.current!.volume = value / 100
        setVolum(value)
    }, [])
    const handleSequence = useCallback(() => {
        let newSequence = (sequence + 1) as (0 | 1 | 2)
        if (newSequence > 2) {
            newSequence = 0
        }
        dispatch(changeSequenceAction(newSequence))
    }, [dispatch, sequence])
    const handleChangeMusic = useCallback((tag: 1 | -1) => {
        dispatch(changeMusicAction(tag))
    }, [dispatch])
    const handleAudioEnded = useCallback(() => {
        // dispatch(changeCurrentLyricIndexAction(0))
        if (sequence === 2) {
            audioRef.current!.currentTime = 0
            audioRef.current!.play()
        } else {
            dispatch(changeMusicAction(1))
        }
    }, [sequence, dispatch])
    return (
        <PlaybarWrapper className='sprite_player'>
            <div className='content wrap-v2'>
                <Control isPlaying={isPlaying}>
                    <button className='sprite_player prev' onClick={_ => handleChangeMusic(-1)}></button>
                    <button className='sprite_player play' onClick={playMusic}></button>
                    <button className='sprite_player next' onClick={_ => handleChangeMusic(1)}></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <Link to="/discover/player">
                            <img src={getSizeImage(currentSong.al?.picUrl, 35)} alt={currentSong.al?.name} />
                        </Link>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <a href="#/" className="singer-name">{currentSong.ar && currentSong.ar[0].name}</a>
                        </div>
                        <div className="progress">
                            <Slider
                                value={progress}
                                tooltipVisible={false}
                                defaultValue={0}
                                onChange={handleSliderChange}
                                onAfterChange={handleSilerAfterChange}
                            />
                            <div className="time">
                                <span className="now-time">{dayjs(currentTime).format('mm:ss')}</span>
                                <span className="divider">/</span>
                                <span className="duration">{dayjs(currentSong.dt).format('mm:ss')}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        {/* {
                            isVolumShow && (<div className='volume-wrapper'>
                                <Slider
                                    vertical
                                    onChange={handleVolumChange}
                                    defaultValue={100}
                                    value={volum}
                                />
                            </div>)
                        } */}
                        <Popover placement="top" trigger="click" content={<div className='volume-wrapper'>
                            <Slider
                                vertical
                                onChange={handleVolumChange}
                                defaultValue={100}
                                value={volum}
                            />
                        </div>}>
                            <button className="sprite_player btn volume" onClick={handleVolumClick}></button>
                        </Popover>
                        <button className="sprite_player btn loop" onClick={handleSequence}></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={handleAudioTimeUpdate} onEnded={handleAudioEnded} />
        </PlaybarWrapper>
    )
})
