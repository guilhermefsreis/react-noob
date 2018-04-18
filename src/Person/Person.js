import React from 'react'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Eu sou {props.name} e tenho {props.age} anos de idade!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person