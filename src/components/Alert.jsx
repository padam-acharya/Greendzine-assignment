import React, { useEffect } from 'react'



const Alert = ({ users, showAlert, msg, type }) => {
    useEffect(() => {
        const timerId = setTimeout(() => {
            showAlert()
        }, 2000)

        return () => clearTimeout(timerId)
    }, [users, msg])
    return (
        <div className='alert-message'>
            <p className={`alert-${type}`}>{msg}</p>
        </div>
    )
}

export default Alert