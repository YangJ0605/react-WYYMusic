import React, { memo } from 'react'

import HotRecommendHeader from '@/components/hot-rec-header'

export default memo(function HotRecommend() {
  return (
    <div>
      <HotRecommendHeader title='热门推荐' keywords={["华语", "流行", "民谣", "摇滚", "电子"]}></HotRecommendHeader>
    </div>
  )
})
