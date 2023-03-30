import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {

    const [products, isLoading] = useProducts([]);
    
    return (
        <div className='container mx-auto'>
            <h2>All Products {products.length}</h2>
            {isLoading ? (
                <Loading></Loading>
            ) : (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5'>
                    {
                        products.map((product, i) => <Product
                            key={i}
                            product={product}
                        ></Product>)
                    }
                </div>
            )}

        </div>
    );
};

export default Products;