import React, { memo, useEffect } from 'react'

import {useDispatch, useSelector, shallowEqual, TypedUseSelectorHook} from 'react-redux'

import HotRecommendHeader from '@/components/hot-rec-header'
import SongsCover from '@/components/songs-cover'
import { getHotRecommedAction } from '../../store/actionCreators'
import { RootState } from '@/store/reducer'

import {HotRecommendWrapper} from './style'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default memo(function HotRecommend() {
  const dispatch = useDispatch()
  const {hotRecommends} = useTypedSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  useEffect(()=>{
    dispatch(getHotRecommedAction(8))
  },[dispatch])
  console.log('hotRecommends', hotRecommends)
  return (
    <HotRecommendWrapper>
      <HotRecommendHeader title='热门推荐' keywords={["华语", "流行", "民谣", "摇滚", "电子"]}></HotRecommendHeader>
      <div className='recommend-list'>
        {
          hotRecommends.map(item => {
            return (
              <SongsCover info={item} key={item.name} showCreator={false}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
