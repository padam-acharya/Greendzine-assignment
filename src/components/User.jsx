import React from 'react'

const User = ({ id, avatar, first_name }) => {
    return (
        <div className='user'>
            <div className='image-container'>
                <p><span>{id}</span></p>
                <img src={avatar} alt="image" />
            </div>
            <p className='first-name'>{first_name}</p>
        </div>
    )
}

export default User