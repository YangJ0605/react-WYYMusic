import React from 'react'
import {RouteConfig} from 'react-router-config'
import { Redirect } from 'react-router-dom'

import Mine from '@/pages/mine'

import Discover from '@/pages/discover'
import Album from '@/pages/discover/c-pages/album'
import Artist from '@/pages/discover/c-pages/artist'
import Djradio from '@/pages/discover/c-pages/djradio'
import Ranking from '@/pages/discover/c-pages/ranking'
import Recommend from '@/pages/discover/c-pages/recommend'
import Songs from '@/pages/discover/c-pages/songs'

import Friend from '@/pages/friend'




const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    render:() => <Redirect to='/discover'/>
  },
  {
    component: Discover,
    path: '/discover',
    // exact: true
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend'/>
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/djradio',
        component: Djradio
      },
      {
        path: '/discover/artist',
        component:  Artist
      },
      {
        path: '/discover/album',
        component: Album
      }
    ]
  },
  {
    component:Mine,
    path: '/mine'
  },
  {
    component: Friend,
    path: '/friend'
  }
]


export default routes