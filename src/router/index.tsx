import {RouteConfig} from 'react-router-config'

import Mine from '@/pages/mine'
import Discover from '@/pages/discover'
import Friend from '@/pages/friend'



const routes: RouteConfig[] = [
  {
    component: Discover,
    path: '/',
    exact: true
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