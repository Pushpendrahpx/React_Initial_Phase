import React from 'react';

function Inline() {
    const heading = {
        backgroundColor:'red',
        color:'white',
        padding:'10px',
        margin:'20px',
        fontSize:'10px',
        boxShadow:'0 0 0 4px red'
    }
    return (
        <button style={heading}>
                Hello, World this is Inline JS React based Styling
        </button>
    )
}

export default Inline;
