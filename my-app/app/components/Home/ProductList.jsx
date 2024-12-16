import React from 'react';
import ProductCard from './components/ProductCard';
import "../Home/style/ProductList.css";
import Data from "../../core/data/movies";



const ProductList = () => {
    
    
        // logic part
        // 1 way data binding (sharing)
    const moviedata = Data;
    const displayMovies = () => {
        return moviedata.map((item) => {
            return ( 
            <ProductCard 
            key={item.id} 
            name={item.name} 
            desc={item.description}
            img={item.img} 
            />
            );
        });
    };

    // DOM part

    return <div className='product-list'>

                {displayMovies()}

            </div>;
    
};

export default ProductList;