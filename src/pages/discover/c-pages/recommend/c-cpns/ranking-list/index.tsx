import React, { memo } from 'react'

import RankingListHeader from '@/components/hot-rec-header'

export default memo(function RankingList() {
    return (
        <div>
            <RankingListHeader title='榜单'/>
        </div>
    )
})
