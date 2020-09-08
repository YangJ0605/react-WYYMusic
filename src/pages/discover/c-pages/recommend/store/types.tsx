import {CHANGE_TOP_BANNERS} from './constants'

export type TopBannersItem = {imageUrl: string, [propName:string]: any}
export interface RecommendState {
  topBanners: Array<TopBannersItem>,
  [propName: string]: any
}

interface ChangeTopBannersAction {
  type: typeof CHANGE_TOP_BANNERS,
  topBanners: Array<TopBannersItem>,
}

export type ActionTypes = ChangeTopBannersAction