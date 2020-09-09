import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND } from './constants'

export type TopBannersItem = { imageUrl: string, [propName: string]: any }

export type HotRecommendsItem = {
  picUrl: string,
  playCount: number,
  copywriter?: string,
  creator?: {
    nickname: string
  },
  name: string
}

// state 类型
export interface RecommendState {
  topBanners: Array<TopBannersItem>,
  hotRecommends: Array<HotRecommendsItem>,
  [propName: string]: any
}


// action
interface ChangeTopBannersAction {
  type: typeof CHANGE_TOP_BANNERS,
  topBanners: Array<TopBannersItem>,
}

interface ChangeHotRecommendAction {
  type: typeof CHANGE_HOT_RECOMMEND,
  hotRecommends: Array<HotRecommendsItem>
}

export type ActionTypes = ChangeTopBannersAction | ChangeHotRecommendAction