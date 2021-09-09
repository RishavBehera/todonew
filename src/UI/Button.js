import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}type={props.type} className={props.className}>{props.children}</button>
        </div>
    )
}

export default Button
