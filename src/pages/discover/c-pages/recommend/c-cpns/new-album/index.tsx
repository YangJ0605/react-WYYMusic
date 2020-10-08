import React, { memo, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual, TypedUseSelectorHook } from 'react-redux'


import { getNewAlbumsAction } from '../../store/actionCreators'


import { RootState } from '@/store/reducer'

import { Carousel } from 'antd'
import NewAlbumHeader from '@/components/hot-rec-header'
import AlbumCover from '@/components/album-cover'
import { NewAlbumWrapper } from './style'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default memo(function NewAlbum() {
    const dispatch = useDispatch()
    const { newAlbums } = useTypedSelector(state => ({
        newAlbums: state.getIn(['recommend', 'newAlbums'])
    }), shallowEqual)

    const carouselRef = useRef<Carousel>(null)
    useEffect(() => {
        dispatch(getNewAlbumsAction(10))
    }, [dispatch])

    const handleNext = useCallback(() => {
        carouselRef.current?.next()
    }, [carouselRef])
    const handlePrev = useCallback(() => {
        carouselRef.current?.prev()
    }, [carouselRef])
    return (
        <NewAlbumWrapper>
            <NewAlbumHeader title='新碟上架' />
            <div className='content'>
                <button className='arrow arrow-left sprite_02' onClick={handlePrev}></button>
                <div className='album'>
                    <Carousel dots={false} ref={carouselRef}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className='page'>
                                        {
                                            newAlbums.slice(item * 5, (item + 1) * 5).map(item2 => {
                                                return (
                                                    <AlbumCover info={item2} key={item2.name} height={100} width={118} bgp='-570px' />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className='arrow arrow-right sprite_02' onClick={handleNext}></button>
            </div>
        </NewAlbumWrapper>
    )
})
