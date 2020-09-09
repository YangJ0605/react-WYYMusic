import React, { memo} from 'react'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommed'
import NewAlbum from './c-cpns/new-album'
import RankingList from './c-cpns/ranking-list'

export default memo(function Recommend() {

  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <RankingList/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
