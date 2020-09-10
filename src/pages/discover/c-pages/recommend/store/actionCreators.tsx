import {CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANGE_RANKINGS} from './constants'
import {ActionTypes, TopBannersItem, HotRecommendsItem, NewAlbumsItem, Rankings} from './types'
import {getTopbanners, getHotRecommends, getNewAlbums, getRankingList} from '@/services/recommend'
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

export const changeRankingAction = (rankings:Rankings):ActionTypes => {
  return {
    type: CHANGE_RANKINGS,
    rankings
  }
}

// export const changeNewRankingAction = (newRanking:NewRankingItem[]):ActionTypes => {
//   return {
//     type: CHANGE_NEW_RANKING,
//     newRanking
//   }
// }

// export const changeOriginRankingAction = (originRanking:OriginRankingItem[]):ActionTypes => {
//   return {
//     type: CHANGE_ORIGIN_RANKING,
//     originRanking
//   }
// }

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

export const getRankingListAction = (): ThunkResult<void> => {
  return dispatch => {
    const promises = [getRankingList(0), getRankingList(2), getRankingList(3)]
    Promise.all(promises).then(res => {
      // console.log(res.length)
      // switch(idx) {
      //   case 0:
      //     dispatch(changeUpRankingAction(res.playlist.tracks))
      //     break
      //   case 2:
      //     dispatch(changeNewRankingAction(res.playlist.tracks))
      //     break
      //   case 3:
      //     dispatch(changeOriginRankingAction(res.playlist.tracks))
      // }
      // dispatch(changeRankingAction(res))
      const obj:Rankings = {
        upRanking: res[0].playlist,
        newRanking: res[1].playlist,
        originRanking: res[2].playlist
      }
      dispatch(changeRankingAction(obj))
    })
  }
}