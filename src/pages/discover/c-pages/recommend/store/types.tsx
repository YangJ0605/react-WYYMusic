import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANGE_RANKINGS } from './constants'

export type TopBannersItem = {
  imageUrl: string,
  [propName: string]: any
}
export type HotRecommendsItem = {
  picUrl: string,
  playCount: number,
  copywriter?: string,
  creator?: {
    nickname: string
  },
  name: string
}
export type NewAlbumsItem = {
  picUrl: string,
  name: string,
  [propName:string]: any
}

export type UpRankingItem = {
  [propName:string]: any
}
export type NewRankingItem = {
  [propName:string]: any
}
export type OriginRankingItem = {
  [propName:string]: any
}
type RankingItem<T> = {
  coverImgUrl: string
  tracks: Array<T>
  name: string
}
export type Rankings = {
  upRanking: RankingItem<UpRankingItem>,
  newRanking: RankingItem<NewRankingItem>,
  originRanking: RankingItem<OriginRankingItem>
}
// state 类型
export interface RecommendState {
  topBanners: Array<TopBannersItem>,
  hotRecommends: Array<HotRecommendsItem>,
  newAlbums: Array<NewAlbumsItem>,
  rankings: Rankings,
  [propName: string]: any
}


// action 类型
interface ChangeTopBannersAction {
  type: typeof CHANGE_TOP_BANNERS,
  topBanners: Array<TopBannersItem>,
}

interface ChangeHotRecommendAction {
  type: typeof CHANGE_HOT_RECOMMEND,
  hotRecommends: Array<HotRecommendsItem>
}

interface ChangeNewAlbumsAction {
  type: typeof CHANGE_NEW_ALBUM,
  newAblums: Array<NewAlbumsItem>
}

interface ChangeRankingAction {
  type: typeof CHANGE_RANKINGS,
  rankings: Rankings
}

// interface ChangeNewRankingAction {
//   type: typeof CHANGE_NEW_RANKING,
//   newRanking: Array<NewRankingItem>
// }

// interface ChangeOriginRankingAction {
//   type: typeof CHANGE_ORIGIN_RANKING,
//   originRanking: Array<OriginRankingItem>,
// }
export type ActionTypes = ChangeTopBannersAction | ChangeHotRecommendAction | ChangeNewAlbumsAction | ChangeRankingAction

