import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'

import {headerLinks, Link} from '@/common/local-data'

import {
  HeadedWrapper,
  HeaderLeft,
  HeaderRight
} from './style'


export default memo(function AppHeader() {
  const showSelectItem = (item:Link, index:number) => {
    if(index < 3) {
      return (
      <NavLink to={item.link} exact>
        {item.title}
        <i className='sprite_01 icon'></i>
      </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeadedWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <NavLink to='/' className='logo sprite_01'></NavLink>
          <div className='select-list'>
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className='select-item'>
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          right
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeadedWrapper>
  )
})
