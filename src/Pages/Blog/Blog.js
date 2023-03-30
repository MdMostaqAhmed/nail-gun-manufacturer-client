import React, { useEffect } from 'react';

const Blog = () => {


    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }, [])


    return (
        <div>
            <h2>Blog Page</h2>
        </div>
    );
};

export default Blog;