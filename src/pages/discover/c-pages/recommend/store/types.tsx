import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM } from './constants'

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
  [propName: string]: any
}

// state 类型
export interface RecommendState {
  topBanners: Array<TopBannersItem>,
  hotRecommends: Array<HotRecommendsItem>,
  newAlbums: Array<NewAlbumsItem>,
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

export type ActionTypes = ChangeTopBannersAction | ChangeHotRecommendAction | ChangeNewAlbumsAction

