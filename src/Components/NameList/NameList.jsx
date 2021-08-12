import React from 'react'

const NameList = (props) => {
    const names = props.names.map((name, index) => {
        return <li key={index}>{name}</li>
    });

    return (
        <div>
            <ol>
                {names}
            </ol>
        </div>
    )
}

export default NameList;