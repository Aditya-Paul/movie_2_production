/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({selecedActors, remaining, totalcost}) => {
    //let num =selecedActors.length;
    //console.log( 'ami',serial)
    
    return (
        <div className='bg-green-400'>
            <h1 className='bg-red-400'>This is cart</h1>
            <hr />
            <h1>Total Actor: {selecedActors.length}</h1>
            <hr />
            <h5>Remaining:{remaining}</h5>
            <h5>Total cost:{totalcost}</h5>
            <div className='bg-red-500 text-3xl items-start'>
                    { 
                    
                    selecedActors.map((actor, ias) =>(
                        <li key={actor.id}>{ias+1} Adi:{actor.name}</li>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;