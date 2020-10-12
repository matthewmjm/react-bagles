import React from 'react';

function Bagel(props) {
    return (
        <>
            <li>{props.type}</li>
            <p>bagel rating: {props.rating}</p>
        </>
    );
}

export default Bagel;  