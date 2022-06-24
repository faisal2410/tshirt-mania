import React from 'react';
import "./TShirt.css";

const TShirt = ({tshirt,handleAddToCart}) => {
   const {name,price,picture,_id}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt={name} />
            <h4>{name}</h4>
            <p>Price:${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;