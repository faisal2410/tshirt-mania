import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import "./Aunty.css";

const Aunty = () => {
    const [house,setHouse]=useContext(RingContext);
    const handleHouseIncrement=()=>{
        const newHouseCount=house+1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <button onClick={handleHouseIncrement}>Aunty Magic</button>
        </div>
    );
};

export default Aunty;