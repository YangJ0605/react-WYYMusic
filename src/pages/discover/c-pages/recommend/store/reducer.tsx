import {Map} from 'immutable'

import {CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANGE_RANKINGS} from './constants'
import {RecommendState, ActionTypes} from './types'

 
export interface StateMap<T> extends Map<string, any> {
  get<K extends keyof T>(key: K): T[K]
}
export type State = StateMap<RecommendState>

const initialState:State = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: {
    upRanking: {},
    newRanking: {},
    originRanking: {}
  }
})

const reducer = (state = initialState, action: ActionTypes):State => {
  switch(action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    case CHANGE_NEW_ALBUM:
      return state.set('newAlbums', action.newAblums)
    case CHANGE_RANKINGS:
      return state.set('rankings', action.rankings)
    default:
      return state
  }
}

export default reducer