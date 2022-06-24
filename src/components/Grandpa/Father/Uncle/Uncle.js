import React from 'react';
import "./Uncle.css";

const Uncle = ({house}) => {
    return (
        <div>
            <h4>Uncle</h4>
            <p>House: {house}</p>
        </div>
    );
};

export default Uncle;