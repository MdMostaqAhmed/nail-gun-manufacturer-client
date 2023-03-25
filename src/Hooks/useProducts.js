import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        fetch(products.json)
            .then(res => res.json())
            .then(data => setProducts(data))
        setIsLoading(false)
    }, [])
    return [products, isLoading]
};

export default useProducts;