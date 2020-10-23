import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ProductList from '~/pages/ProductList'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ProductList} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
