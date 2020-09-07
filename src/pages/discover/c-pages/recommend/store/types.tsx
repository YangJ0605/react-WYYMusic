import {CHANGE_TOP_BANNERS} from './constants'

export interface RecommendState {
  topBanners: Array<any>,
  [propName: string]: any
}

interface ChangeTopBannersAction {
  type: typeof CHANGE_TOP_BANNERS,
  topBanners: Array<any>,
}

export type ChangeActonTypes = ChangeTopBannersAction