import {combineReducers} from 'redux-immutable'
import {Map} from 'immutable'


import {reducer as recommendReducer} from '@/pages/discover/c-pages/recommend/store'
import {reducer as playerReducer} from '@/pages/player/store'

// import {StateMap} from '@/pages/discover/c-pages/recommend/store/reducer'
import {TopBannersItem, HotRecommendsItem, NewAlbumsItem, Rankings} from '@/pages/discover/c-pages/recommend/store/types'
import {CurrentSong, Sequence, LyricList} from '@/pages/player/store/types'

const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

type TopKey = ['recommend', 'topBanners']
type HotKey = ['recommend', 'hotRecommends']
type NewAlbumKey = ['recommend', 'newAlbums']
type RankingsKey = ['recommend', 'rankings']
// type NewRankingKey = ['recommend', 'newRanking']
// type OriginRankingKey = ['recommend', 'originRanking']
type CurrentSongKey = ['player', 'currentSong']
type PlayListKey = ['player', 'playList']
type CurrentSongIndexKey = ['player', 'currentSongIndex'] 
type SequenceKey = ['player', 'sequence']
type LyricListKey = ['player', 'lyricList']

export interface RootState extends Map<string, any> {
  getIn<K extends TopKey>(key: K): TopBannersItem[]
  getIn<K extends HotKey>(key: K): HotRecommendsItem[]
  getIn<K extends NewAlbumKey>(key:K):NewAlbumsItem[]
  getIn<K extends RankingsKey>(key:K):Rankings
  getIn<K extends CurrentSongKey>(key:K):CurrentSong
  getIn<K extends PlayListKey>(key:K):CurrentSong[]
  getIn<K extends CurrentSongIndexKey>(key:K): number
  getIn<K extends SequenceKey>(key:K): Sequence
  getIn<K extends LyricListKey>(key:K):LyricList
}

export default reducer