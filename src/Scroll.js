import React from 'react';

const Scroll = (props) => {
    return ( 
        <div style={{height: '700px', overflowY: 'scroll'}}>
            {props.children}
        </div>
    )
};

export default Scroll;