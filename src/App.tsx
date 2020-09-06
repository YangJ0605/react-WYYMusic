import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'


export default memo(function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
      </Router>
    </Provider>
  )
})
