import React from 'react'
import './MyButton.scss'
const MyButton = ({children, isGoogleSignin, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button `} {...otherProps}>
            {children}
        </button>
    )
}

export default MyButton
