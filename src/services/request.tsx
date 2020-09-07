import axios, { AxiosInstance } from 'axios'
import { message } from 'antd'

import { TIMEOUT, baseUrl } from './config'


const instance: AxiosInstance = axios.create({
  timeout: TIMEOUT,
  baseURL: baseUrl
})

instance.interceptors.request.use(config => {
  return config
}, err => console.log(err))

instance.interceptors.response.use(response => {
  return response.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err
})

interface IAxiosRes {
  banners: any[],
  test: any[]
}

const request = (url: string, method:string = 'get', data:{[propName:string]:any} = {}) => {
  method = method.toLocaleLowerCase()
  return new Promise<IAxiosRes>(resolve => {
    let promise: Promise<IAxiosRes>
    if (method === 'get') {
      promise = instance.get(url, {
        params: data
      })
    } else {
      promise = instance.post(url, data)
    }
    promise.then(res => {
      resolve(res)
    }).catch(err => {
      message.error('请求出错' + err.message)
    })
  })
}

export default request