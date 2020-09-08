import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual, TypedUseSelectorHook } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'
import { RootState } from '@/store/reducer'

import { Carousel } from 'antd'

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default memo(function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const { topBanners } = useTypedSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch()
    dispatch(getTopBannerAction())
  }, [dispatch])

  const carouselRef = useRef<Carousel>(null)

  const handleBeforeChange = useCallback((form: number, to: number) => {
    setCurrentIndex(to)
  }, [])
  return (
    <BannerWrapper bgImage={topBanners[currentIndex]?.imageUrl + '?imageView&blur=40x20'}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel effect="fade" dotPosition='bottom'
            autoplay dots={{ className: 'dot-item' }}
            ref={carouselRef} beforeChange={handleBeforeChange}>
            {topBanners.map(item => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} className='image' />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => carouselRef.current?.prev()}></button>
          <button className='btn right' onClick={e => carouselRef.current?.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
