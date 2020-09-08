import React, { memo} from 'react'

import {RecommendWrapper} from './style'
import TopBanner from './c-cpns/top-banner'

export default memo(function Recommend() {

  return (
    <RecommendWrapper>
      <TopBanner/>
    </RecommendWrapper>
  )
})
