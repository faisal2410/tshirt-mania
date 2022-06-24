import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from './Father/Father';
import Uncle from './Father/Uncle/Uncle';
import "./Grandpa.css";


/**
 * context api
 * call createContext with a default value
 * set a variable of the context with uppercase
 * Make sure you export to use other place
 * Wrap your child content with context provider (eg RingContext.Provider)
 * Provide a value
 * to consume the context from the child component
 * use the useContext hook and you will need to pass the context name
 * 
 * */ 
export const RingContext=createContext('diamond')
const Grandpa = () => {
  
    const ornaments='Kadamatir Rings';
    const [house,setHouse]=useState(1)
    const handleBuyHouse=()=>{
        const newHouseCount= house +1;
        setHouse(newHouseCount);
    }
    return (
       <RingContext.Provider value={[house,setHouse]}>
         <div className='grandpa' >
            <h4>Grandpa</h4>
            <p>House: {house} <button onClick={handleBuyHouse}>Buy a House</button></p>
            
            <section style={{display:'flex'}}>
            <Father house={house} ></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </section>
            
        </div>
       </RingContext.Provider>
    );
};

export default Grandpa;