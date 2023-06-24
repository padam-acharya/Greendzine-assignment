import { useState, useEffect } from 'react'
import User from './components/User'
import Input from './components/Input'
import Alert from './components/Alert'


function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  })
  const [filteredUser, setFilteredUser] = useState([])

  function showAlert(show = "false", type = "", msg = "") {
    setAlert({ show, msg, type })
  }

  function userSearch(name) {

    if (!name) {
      showAlert(true, 'error', 'Input field cannot be empty')
      return
    }

    const userFound = users.filter(user => user.first_name === name)
    if (userFound.length !== 0) {
      setFilteredUser(userFound)
    }
    else {
      showAlert(true, 'error', `${name} not found `)
    }
  }


  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true)
        const res = await fetch('https://reqres.in/api/users?page=2')
        if (res.ok) {
          setError(null)
        }
        const result = await res.json()
        setUsers(result.data)
      }
      catch (err) {
        setError(err)
      }
      finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading....</h1>
  }

  if (error) {
    return <h1>Oops, something went wrong</h1>
  }

  if (filteredUser.length !== 0) {
    return (
      <div className='filtered-user'>
        <User {...filteredUser[0]} />
        <button className='search' onClick={() => setFilteredUser([])}>Show All</button>
      </div>
    )

  }


  return (
    <div className="app">
      {alert.show && <Alert {...alert} users={users} showAlert={showAlert} />}
      <Input search={userSearch} message={message} alert={alert} showAlert={showAlert} />
      <div className='user-container
      '>
        {
          users.map(user => (
            <User key={user.id} {...user} />
          ))
        }
      </div>
    </div>
  )
}

export default App
