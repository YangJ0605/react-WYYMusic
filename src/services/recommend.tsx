import request from './request'

export const getTopbanners = () => {
    return request('/banner')
}

export const getHotRecommends = (limit:number) => {
    return request('/personalized', 'get', {limit})
}

export const getNewAlbums = (limit:number) => {
    return request('/top/album', 'get', {limit})
}