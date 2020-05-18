import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Category from './components/Category'
import Search from './components/Search'
import Product from './components/Product'
import Cart from './components/Cart'
import Success from './components/Success'
import Page404 from './components/Page404'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//import { Provider } from 'react-redux'
//import store from './redux-setup/Store'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/search" component={Search} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/success" component={Success} />
          <Route path="/404" component={Page404} />
          <Route path="*" render={() => (<Redirect to="404" />)} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
