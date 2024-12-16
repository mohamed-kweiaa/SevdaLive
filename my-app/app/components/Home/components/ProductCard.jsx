import React from 'react';
import "../style/Productcard.css"

// PROPS -> PROPERTY / ATTRIBUTES
// Read Only 

const ProductCard = (props) => {
    // console.log(props);
    const watchNow = () => {
        console.log("here we clicked on watch now");
        
    }
    return (
        <div className='product-card'>
            <div className='card-img'>
                <img src={props.img} alt="product-card" />
            </div>
            <div className='card-info'>
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
                <button inClick={watchNow}> Watch Now</button>
            </div>
        </div>
    );
};

export default ProductCard;