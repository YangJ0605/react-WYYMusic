import {CHANGE_TOP_BANNERS} from './constants'
import {RecommendState, ChangeActonTypes} from './types'


const initialState:RecommendState = {
  topBanners: []
}

const reducer = (state = initialState, action: ChangeActonTypes):RecommendState => {
  switch(action.type) {
    case CHANGE_TOP_BANNERS:
      return {
        ...state,
        topBanners: action.topBanners
      }
    default:
      return state
  }
}

export default reducer