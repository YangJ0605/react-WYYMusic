import React, { memo } from 'react'

import NewAlbumHeader from '@/components/hot-rec-header'

export default memo(function NewAlbum() {
    return (
        <div>
            <NewAlbumHeader title='新碟上架'/>
        </div>
    )
})
