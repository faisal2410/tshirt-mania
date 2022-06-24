import React from 'react';
import "./Cart.css"

const Cart = ({cart,handleRemoveFromCart}) => {
    // Conditional rendering options
    // Element variable
    // ternary operator
    // && operator (shorthand)
    // || operator
    let command;
    if(cart.length===0){
        command=<p>Please add at least one item</p>
    }else if(cart.length===1){
        command=<p>Please add more</p>
    }
    else{
        command=<p><small>Thanks for adding items</small></p>
    }

    return (
        <div>
            <h2>Item Selected : {cart.length}</h2>
            
           {
            cart.map(tshirt=><p key={tshirt._id}>
                {tshirt.name}
                <button onClick={()=>handleRemoveFromCart(tshirt)}>X</button>
                </p>)
           }
           {cart.length===0||<p className='orange'>Yay!!! You are buying</p>}
           {cart.length===3 && <div className='orange'>
            <h3>Trigonal</h3>
            <p>Tin jon ke gift diba</p>
            </div>}
           {command}
           {(cart.length!==4)?<p>Keep adding</p>:<button>Clear All</button>}
           {cart.length===4 && <button className="orange">Review Order</button>}
        </div>
    );
};

export default Cart;