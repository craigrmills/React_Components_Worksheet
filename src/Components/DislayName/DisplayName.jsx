import React from 'react'

const DisplayName = (props) => {
    return (
        <div>
            <h3>{props.fName}</h3>
            <h3>{props.lName}</h3>
        </div>
    );
}

export default DisplayName;