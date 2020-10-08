import {ThunkAction} from 'redux-thunk'

import {getRandomNum} from '@/utils/format'
import parseLyric from '@/utils/parse-lyric'
import {getSongDetial, getLyric} from '@/services/player'

import * as actionTypes from './constant'

import {State} from './reducer'
import {ActionTypes, CurrentSong, PlayList, Sequence, LyricList} from './types'

type ThunkResult<R> = ThunkAction<R, State, undefined, ActionTypes>

const changeCurrentSongAction = (currentSong:CurrentSong):ActionTypes => {
    return {
        type: actionTypes.CHANGE_CURRENT_SONG,
        currentSong
    }
}

const changePlayListAction = (playList:PlayList):ActionTypes => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

const changeCurrentSongIndexAction = (index:number):ActionTypes => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})

export const changeSequenceAction = (sequence:Sequence):ActionTypes => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

const changeLyricListAction = (lyricList:LyricList):ActionTypes => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList
})

export const changeMusicAction = (tag: 1 | -1):ThunkResult<void> => {
    return (dispatch, getState) => {
        const playList = getState().getIn(['player', 'playList']) as PlayList
        const sequence = getState().getIn(['player', 'sequence']) as Sequence
        let currentSongIndex = getState().getIn(['player', 'currentSongIndex']) as number
        switch(sequence) {
            case 1:
                let randomIndex = getRandomNum(playList.length)
                while(randomIndex === currentSongIndex) {
                    randomIndex = getRandomNum(playList.length)
                }
                currentSongIndex = randomIndex
                break
            default:
                currentSongIndex += tag
                if(currentSongIndex > playList.length -1) currentSongIndex = 0
                if(currentSongIndex < 0) currentSongIndex = playList.length - 1
        }
        const currentSong = playList[currentSongIndex]
        dispatch(changeCurrentSongAction(currentSong))
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
        // if(isPlaying) {
        //     audioRef.current!.play()
        // }
        dispatch(getLyricAction(currentSong.id))
    }
}

export const getDetailSongAction = (ids:number):ThunkResult<void> => {
    return (dispatch, getState) => {
        const playList = getState().getIn(['player', 'playList']) as PlayList
        // const currentSongIndex = getState().getIn(['player', 'currentSongIndex']) as number
        const songIndex = playList.findIndex(song => song.id === ids)
        if(songIndex > -1) {
            dispatch(changeCurrentSongIndexAction(songIndex))
            const currentSong = playList[songIndex]
            dispatch(changeCurrentSongAction(currentSong))
            // console.log(currentSongIndex, songIndex)
            // if(currentSongIndex === songIndex) return 
            dispatch(getLyricAction(currentSong.id))
        } else {
            getSongDetial(ids).then(res => {
                const currentSong = res.songs && res.songs[0]
                if(!currentSong) return 
                const newPlayList = [...playList]
                newPlayList.push(currentSong)

                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentSongAction(currentSong))

                dispatch(getLyricAction(currentSong.id))
            })
        }
    }
}

export const getLyricAction = (id:number):ThunkResult<void> => {
    return dispatch => {
        getLyric(id).then(res => {
            // console.log(res.lrc.lyric)
            const lyricList = parseLyric(res.lrc.lyric)
            dispatch(changeLyricListAction(lyricList))
        })
    }
}