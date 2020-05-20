import React, { Component } from 'react'
import Home from './Home'
import { getProducts } from '../../services/Server'

export default class HomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newProducts: [],
            featureProducts: []
        }
    }

    async componentDidMount() {
        const newProducts = await getProducts({ params: { isFeatured: false, limit: 6 } }).then(({ data }) => data.data)
        const featureProducts = await getProducts({ params: { isFeatured: true, limit: 6 } }).then(({ data }) => data.data)
        this.setState({
            newProducts,
            featureProducts
        })
    }

    _extract = () => ({
        newProducts: this.state.newProducts,
        featureProducts: this.state.featureProducts
    })

    render() {
        return (
            <Home {...this._extract()} />
        )
    }
}
