import {combineReducers} from 'redux-immutable'
import {Map} from 'immutable'
import {reducer as recommendReducer} from '@/pages/discover/c-pages/recommend/store'
// import {StateMap} from '@/pages/discover/c-pages/recommend/store/reducer'
import {TopBannersItem, HotRecommendsItem} from '@/pages/discover/c-pages/recommend/store/types'

const reducer = combineReducers({
  recommend: recommendReducer
})

type TopKey = ['recommend', 'topBanners']
type HotKey = ['recommend', 'hotRecommends']

export interface RootState extends Map<string, any> {
  getIn<K extends TopKey>(key: K): TopBannersItem[]
  getIn<K extends HotKey>(key: K): HotRecommendsItem[]
}

export default reducer