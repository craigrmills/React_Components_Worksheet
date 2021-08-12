import React from 'react';
import './AlertUser.css';

const AlertUser = (props) => {
    return (
        <div>
            <button onClick={props.alertMe}>Click Me</button>
        </div>
    )
}

export default AlertUser;