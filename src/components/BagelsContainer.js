import React from 'react';
import Bagel from './Bagel';

function BagelsContainer(props) {
    const bagel = props.bagels.map(bagel => {
        return <Bagel key={bagel.id} type={bagel.type} rating={bagel.rating}/>
    })
    return (
        <div>
            {bagel}
        </div>
        
    );
}


export default BagelsContainer; 