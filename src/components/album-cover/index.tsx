import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format'

import { AblumCoverWrapper, IProps } from './style'

type info = {
    picUrl: string,
    name: string,
    [propName:string]: any
}

interface AblumCoverProps extends IProps {
    info: info
}

export default memo(function AblumCover(props: AblumCoverProps) {
    const { info, width, height, bgp } = props
    return (
        <AblumCoverWrapper width={width} height={height} bgp={bgp}>
            <div className='album-image'>
                <img src={getSizeImage(info.picUrl, height)} alt={info.name} />
                <a href="/todo" className="cover image_cover">{info.name}</a>
            </div>
            <div className="album-info">
                <div className="name text-nowrap">{info.name}</div>
                <div className="artist text-nowrap">{info.artist.name}</div>
            </div>
        </AblumCoverWrapper>
    )
})
