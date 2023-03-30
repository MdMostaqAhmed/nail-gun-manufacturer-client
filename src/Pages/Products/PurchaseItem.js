import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchaseItem = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <div>
            <h1>Purchase Page</h1>
            <p>{product.name}</p>
        </div>
    );
};

export default PurchaseItem;