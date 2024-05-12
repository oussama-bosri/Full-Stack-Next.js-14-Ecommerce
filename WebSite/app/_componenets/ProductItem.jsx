import React from 'react'
import Image from 'next/image'
function ProductItem({ product }) {
    return (
        <div className='grid grid-cols-2 sm:grid-col-3 md:grid-col-4'>
            <Image
                src={product?.attributes?.banner?.data?.attributes?.url}
                alt='banner-card'
                width={400}
                height={350}
            />

           {/*  {product?.attributes?.title} */}
        </div>
    )
}

export default ProductItem