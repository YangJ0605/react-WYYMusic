import React, { memo } from 'react'

import {NavLink} from 'react-router-dom'
import {renderRoutes, RouteConfigComponentProps} from 'react-router-config'

import {DiscoverWrapper, TopMenu} from './style'
import { discoverMenu } from '@/common/local-data'


export default memo(function Discover(props:RouteConfigComponentProps) {
  // console.log(props)
  const {route} = props
  return (
    <div>
      <DiscoverWrapper>
        <div className='top'>
          <TopMenu className='wrap-v1'>
            {
              discoverMenu.map(item => {
                return (
                  <div className='item' key={item.title}>
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </div>
                )
              })
            }
          </TopMenu>
        </div>
        {renderRoutes(route!.routes)}
      </DiscoverWrapper>
    </div>
  )
})
