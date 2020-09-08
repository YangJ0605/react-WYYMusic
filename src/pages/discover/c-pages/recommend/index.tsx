import React, { memo} from 'react'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
import TopBanner from './c-cpns/top-banner'

export default memo(function Recommend() {

  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content>
        <RecommendLeft></RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
