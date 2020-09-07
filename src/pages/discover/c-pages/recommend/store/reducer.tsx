import {Map} from 'immutable'

import {CHANGE_TOP_BANNERS} from './constants'
import {RecommendState, ActionTypes} from './types'


export interface StateMap<T> extends Map<string, any> {
  get<K extends keyof T>(key: K): T[K]
}
export type State = StateMap<RecommendState>

const initialState:State = Map({
  topBanners: []
})

const reducer = (state = initialState, action: ActionTypes):State => {
  switch(action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    default:
      return state
  }
}

export default reducer