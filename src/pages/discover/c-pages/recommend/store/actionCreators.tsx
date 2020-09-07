import {CHANGE_TOP_BANNERS} from './constants'
import {ChangeActonTypes} from './types'

export const changeTopBannerAction = (banners:any[]):ChangeActonTypes => {
    return {
        type: CHANGE_TOP_BANNERS,
        topBanners: banners
    }
}