import React from 'react'
import './MyButton.scss'
const MyButton = ({children, ...otherProps}) => {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    )
}

export default MyButton
