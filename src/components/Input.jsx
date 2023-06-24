import React, { useState } from 'react'


const Input = ({ search }) => {


    const [user, setUser] = useState('')

    function handleClick(e) {
        e.preventDefault()
        search(user)
        setUser('')
    }

    return (
        <div className='input-field'>
            <input className='search' type="text" placeholder='Search for user' onChange={(e) => setUser(e.target.value)} value={user} />
            <button className='search' type="button" onClick={handleClick}>Search</button>
        </div>
    )
}

export default Input