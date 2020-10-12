import React from 'react';

function Bagel(props) {
    return (
        <> 
            <div className="bagel-item">
                <li>{props.type}</li>
                <p>bagel rating: {props.rating}</p>
                <button>Delete Ye Bagel</button>
            </div>
        </>
    );
}

export default Bagel;   