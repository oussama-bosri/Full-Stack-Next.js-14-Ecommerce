import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ productlist }) {
    return (
        <div>
            {productlist.map(item => (
                <div>
                    <ProductItem product={item} key={item.id} />
                </div>
            ))}
        </div>
    )
}

export default ProductList