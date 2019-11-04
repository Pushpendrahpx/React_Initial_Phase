import React from 'react';
import './mystyles.css';
import Inline from './Inline';
 
import './ownStyles.css';
import myownstyles from './ownStyles.module.css';

function Stylesheet(props) {
    let primary = props.primary ? 'primary' : '';
    return (
        <div>
            <div className={primary}></div>
            <Inline />
            <div className='error display-4'>Error</div>
            <div className={`${myownstyles.success} display-4`} >Success</div>
        </div>
    )
}

export default Stylesheet;
