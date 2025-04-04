import { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // Заявка към сървъра
    // За тест - фалшив потребител:
    const fakeUser = {
      email: formData.email,
      _id: '12345',
      token: 'abcde12345'
    }

    login(fakeUser)
    navigate('/')
  }

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={onChange} />
        </label>
        <br />
        <label>
          Парола:
          <input type="password" name="password" value={formData.password} onChange={onChange} />
        </label>
        <br />
        <button type="submit">Вход</button>
      </form>
    </div>
  )
}