import React from 'react';

const Scroll = (props) => {
    return ( 
        <div style={{height: '700px', overflowY: 'scroll', border: '5px solid black'}}>
            {props.children}
        </div>
    )
};

export default Scroll;