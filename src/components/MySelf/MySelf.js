import React from 'react';
import Special from '../Special/Special';
import "./MySelf.css";
const MySelf = ({house}) => {
    return (
        <div>
            <h5>MySelf</h5>
            <p>House: {house}</p>
            <Special ></Special>
        </div>
    );
};

export default MySelf;