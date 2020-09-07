import {CHANGE_TOP_BANNERS} from './constants'
import {ActionTypes} from './types'
import request from '@/services/request'
import {ThunkAction} from 'redux-thunk'
import {State} from './reducer'

type ThunkResult<R> = ThunkAction<R, State, undefined, ActionTypes>


export const changeTopBannerAction = (banners:any[]):ActionTypes => {
    return {
        type: CHANGE_TOP_BANNERS,
        topBanners: banners
    }
}


export const getTopBannerAction = ():ThunkResult<void> => {
    return dispatch => {
      request('/banner').then(res => {
        // dispatch(changeTopBannerAction(res));
        dispatch(changeTopBannerAction(res.banners))
        // console.log(res)
      })
    }
  };