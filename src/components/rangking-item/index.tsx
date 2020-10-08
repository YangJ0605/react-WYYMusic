import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getSizeImage } from '@/utils/format'
import {getDetailSongAction} from '@/pages/player/store/actionCreator'

import { RankingItemWrapper } from './style'


type Info = {
    coverImgUrl: string
    name: string
    tracks: any[]
}
type IProps = {
    info: Info
}
export default memo(function RankingItem(props: IProps) {
    const { info = {
      coverImgUrl: '',
      name: '',
      tracks: []
    } } = props
    const {tracks = []} = info
    const dispatch = useDispatch()
    const handlePlayMusic = (item:any) => {
      dispatch(getDetailSongAction(item.id as number))
    }
    return (
        <RankingItemWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
                    <a href="/todo" className="image_cover">ranking</a>
                </div>
                <div className="info">
                    <a href="/todo">{info.name}</a>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play"  onClick={_ => handlePlayMusic(item)}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
        </RankingItemWrapper>
    )
})
