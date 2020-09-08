import {combineReducers} from 'redux-immutable'
import {Map} from 'immutable'
import {reducer as recommendReducer} from '@/pages/discover/c-pages/recommend/store'
// import {StateMap} from '@/pages/discover/c-pages/recommend/store/reducer'
import {TopBannersItem} from '@/pages/discover/c-pages/recommend/store/types'

const reducer = combineReducers({
  recommend: recommendReducer
})

type Key = ['recommend', 'topBanners']

export interface RootState extends Map<string, any> {
  getIn<K extends Key>(key: K): TopBannersItem[]
}

export default reducer