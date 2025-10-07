import React, { useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    useEffect(() => {
        axios.get("https://phi-mart-navy.vercel.app/swagger/api/v1/products")
        
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Product;