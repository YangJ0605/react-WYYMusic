import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format'

import { SongsCoverWrapper } from './style'

type info = {
    picUrl: string,
    playCount: number,
    copywriter?: string,
    creator?: {
        nickname: string
    },
    name: string
}
type IProps = {
    info: info,
    showCreator: boolean
}

export default memo(function SonsCover(props: IProps) {
    const { info, showCreator } = props
    return (
        <SongsCoverWrapper right='0'>
            <div className='cover-top'>
                <img src={getSizeImage(info.picUrl, 140)} alt={info.name} />
                <div className='cover sprite_cover'>
                    <div className='info sprite_cover'>
                        <span>
                            <i className='sprite_icon erji'></i>
                            {info.playCount}
                        </span>
                        <i className='sprite_icon play'></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom">
                {info.name}
            </div>
            {
                showCreator && (<div className="cover-source">
                    by {info.copywriter || info.creator?.nickname}
                </div>)
            }
        </SongsCoverWrapper>
    )
})
