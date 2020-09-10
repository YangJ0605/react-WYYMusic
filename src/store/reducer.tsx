import {combineReducers} from 'redux-immutable'
import {Map} from 'immutable'
import {reducer as recommendReducer} from '@/pages/discover/c-pages/recommend/store'
// import {StateMap} from '@/pages/discover/c-pages/recommend/store/reducer'
import {TopBannersItem, HotRecommendsItem, NewAlbumsItem, Rankings} from '@/pages/discover/c-pages/recommend/store/types'

const reducer = combineReducers({
  recommend: recommendReducer
})

type TopKey = ['recommend', 'topBanners']
type HotKey = ['recommend', 'hotRecommends']
type NewAlbumKey = ['recommend', 'newAlbums']
type RankingsKey = ['recommend', 'rankings']
// type NewRankingKey = ['recommend', 'newRanking']
// type OriginRankingKey = ['recommend', 'originRanking']

export interface RootState extends Map<string, any> {
  getIn<K extends TopKey>(key: K): TopBannersItem[]
  getIn<K extends HotKey>(key: K): HotRecommendsItem[]
  getIn<K extends NewAlbumKey>(key:K):NewAlbumsItem[]
  getIn<K extends RankingsKey>(key:K):Rankings
  // getIn<K extends NewRankingKey>(key:K):NewRankingItem[]
  // getIn<K extends OriginRankingKey>(key:K):OriginRankingItem[]
}

export default reducer