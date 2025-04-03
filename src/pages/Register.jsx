import { useState } from 'react'

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onChange = (e) => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert('Паролите не съвпадат!')
      return
    }

    // Тук ще добавим логика за регистрация
    console.log('Регистрация:', formData)
  }

  return (
    <div>
      <h2>Регистрация</h2>
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
        <label>
          Повтори паролата:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={onChange} />
        </label>
        <br />
        <button type="submit">Регистрация</button>
      </form>
    </div>
  )
}
