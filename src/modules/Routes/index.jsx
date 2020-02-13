import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Content from '../Content'
import Product from '../Product'
import { PATH_CONTENT, PATH_PRODUCTS } from '../../core/constants/paths'

const Routes = () => (
  <Switch>
    <Route exact path={PATH_CONTENT} component={Content} />
    <Route exact path={PATH_PRODUCTS} componen={Product} />
  </Switch>
)

export default Routes
