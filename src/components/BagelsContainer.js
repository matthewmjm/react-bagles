import React from 'react';
import Bagel from './Bagel';

function BagelsContainer(props) {
    const bagel = props.bagels.map(bagel => {return <Bagel 
            bagel={bagel}
            key={bagel.id} 
            type={bagel.type} 
            rating={bagel.rating}
            deleteBagel={props.deleteBagel}
            />
    })
    return (
        <div>
            {bagel}
        </div>
        
    );
}


export default BagelsContainer;  