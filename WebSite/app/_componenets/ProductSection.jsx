'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import productApi from '../_utils/productApis'
import productApis from '../_utils/productApis'

function ProductSection() {
    const [productlist,setProductlist]= useState([])
    useEffect(()=>{
        getLatestProducts_();
    },[])
    const getLatestProducts_ = () => {
        productApis.getLatestProducts().then(res => {
            console.log(res.data.data);
            setProductlist(res.data.data)
        })
    }
    return (
        <div>
            <ProductList  productlist={productlist}/>

        </div>
    )
}

export default ProductSection