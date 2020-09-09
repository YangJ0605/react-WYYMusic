import request from './request'

export const getTopbanners = () => {
    return request('/banner')
}