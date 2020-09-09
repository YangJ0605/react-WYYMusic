import {CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM} from './constants'
import {ActionTypes, TopBannersItem, HotRecommendsItem, NewAlbumsItem} from './types'
import {getTopbanners, getHotRecommends, getNewAlbums} from '@/services/recommend'
import {ThunkAction} from 'redux-thunk'
import {State} from './reducer'


type ThunkResult<R> = ThunkAction<R, State, undefined, ActionTypes>


export const changeTopBannerAction = (banners:TopBannersItem[]):ActionTypes => {
    return {
        type: CHANGE_TOP_BANNERS,
        topBanners: banners
    }
}

export const changeHotRecommendAction = (recommends:HotRecommendsItem[]):ActionTypes => {
  return {
    type: CHANGE_HOT_RECOMMEND,
    hotRecommends: recommends
  }
}

export const changeNewAlbumsAction = (albums:NewAlbumsItem[]):ActionTypes => {
  return {
    type: CHANGE_NEW_ALBUM,
    newAblums: albums
  }
}

export const getTopBannerAction = ():ThunkResult<void> => {
    return dispatch => {
      getTopbanners().then(res => {
        // dispatch(changeTopBannerAction(res));
        dispatch(changeTopBannerAction(res.banners))
        // console.log(res)
      })
    }
  };


export const getHotRecommedAction = (limit:number):ThunkResult<void> => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res.result))
    })
  }
}

export const getNewAlbumsAction = (limit:number):ThunkResult<void> => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumsAction(res.albums))
    })
  }
}