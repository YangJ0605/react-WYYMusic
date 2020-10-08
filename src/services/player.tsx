import request from './request'

export const getSongDetial = (ids:number) => {
    return request('/song/detail', 'get', {
        ids
    })
}

export const getLyric = (id:number) => {
    return request('/lyric', 'get', {id})
}