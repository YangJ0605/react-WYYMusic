import React, { memo, useEffect } from 'react'
import {useDispatch, useSelector, shallowEqual, TypedUseSelectorHook} from 'react-redux'
import {RootState} from '@/store/reducer'
import {getTopBannerAction} from './store/actionCreators'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default memo(function Recommend() {
  const {topBanners} = useTypedSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch()
    dispatch(getTopBannerAction())
  }, [])
  topBanners.forEach(item => {
    console.log(item.imageUrl)
  })
  return (
    <div>
      Recommend:{topBanners.length}
    </div>
  )
})
