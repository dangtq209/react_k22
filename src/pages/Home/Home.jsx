import React, { Component } from 'react';
import { ProductItem } from '../../components'

class Home extends Component {
    _renderProducts = (products) => {
        return products.map((product) => {
            return <ProductItem key={product._id} item={product} />
        })
    }
    render() {
        const { newProducts, featureProducts } = this.props
        return (
            <div>
                <div>
                    <div className="products">
                        <h3>Sản phẩm nổi bật</h3>
                        <div className="product-list card-deck">
                            {this._renderProducts(newProducts)}
                        </div>
                    </div>
                    <div className="products">
                        <h3>Sản phẩm mới</h3>
                        <div className="product-list card-deck">
                            {this._renderProducts(featureProducts)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;