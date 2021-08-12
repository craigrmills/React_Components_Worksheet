import React from 'react'

const DisplayName = (props) => {
    return (
        <div>
            <h3>{props.firstName} {props.lastName}</h3>
            
        </div>
    )
}

export default DisplayName;