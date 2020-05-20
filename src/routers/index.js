import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { HomePage, NotFoundContaine, CategoryPage, Detail, Cart, OrderSuccess, Search } from '../pages'

export default class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/category" exact component={CategoryPage} />
                <Route path="/detail" exact component={Detail} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/orderSuccess" exact component={OrderSuccess} />
                <Route path="/search" exact component={Search} />
                <Route path="/404" exact component={NotFoundContaine} />
                <Route path="*" render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}
