import { useState } from "react"
import axios from "axios"

const SingUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState([])
  const [requestSuccessful, setRequestSuccessful] = useState('')

  const onChangeHandler = (e, setter) => {
    setter(e.target.value)
  }

  const createUser = async (e) => {
    try {
      e.preventDefault()

      const data = {username, email, password, confirmPassword}
  
      const response = await axios.post(
        'https://todo-app-backend-ja27.onrender.com/sign-up',
        data
      )
  
      setUsername('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setRequestSuccessful(response.data.message)
      setError([])
    } catch (error) {
      setError(error.response?.data.message)
    }
  }

  return (
    <div>
      <form action="">
        <input 
          onChange={(e) => {
            onChangeHandler(e, setUsername)
          }}
          value={username}
          type="text"
          placeholder="Username"
        />

        <input 
          onChange={(e) => {
            onChangeHandler(e, setEmail)
          }}
          value={email}
          type="text"
          placeholder="email"
        />

        <input 
          onChange={(e) => {
            onChangeHandler(e, setPassword)
          }}
          value={password}
          type="text"
          placeholder="password"
        />
        
        <input 
          onChange={(e) => {
            onChangeHandler(e, setConfirmPassword)
          }}
          value={confirmPassword}
          type="text"
          placeholder="confirmPassword"
        />

        <button
          type="submit"
          onClick={(e) => {createUser(e)}}
        >
          Sign up!
        </button>
      </form>

      {error.length > 0 &&
        <ul>
          {error.map((item, index) => (
            <li key={index}>
              {item?.username}
              {item?.email}
              {item?.password}
              {item?.confirmPassword}
            </li>
          ))}
        </ul>
      }

      {requestSuccessful.length > 0 &&
        <div>
          {requestSuccessful}
        </div>
      }
    </div>
  )
}

export default SingUp
