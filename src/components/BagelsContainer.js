import React from 'react';
import Bagel from './Bagel';
import Delete from './Delete';

function BagelsContainer(props) {
    const bagel = props.bagels.map(bagel => {
        return <Bagel key={bagel.id} type={bagel.type} rating={bagel.rating}/>
    })
    return (
        <div>
            <p>This is the Bagels Container</p>
            {bagel}
            <Delete />
        </div>
        
    );
}


export default BagelsContainer; 