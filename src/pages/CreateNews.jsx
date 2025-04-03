import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function CreateNews() {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Тук ще пращаме заявка към бекенда
    console.log('Нова новина:', formData, 'Автор:', auth.email);

    // След създаване пренасочваме към /news
    navigate('/news');
  };

  return (
    <div>
      <h2>Създай новина</h2>
      <form onSubmit={onSubmit}>
        <label>
          Заглавие:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <label>
          Съдържание:
          <textarea
            name="content"
            value={formData.content}
            onChange={onChange}
            required
          />
        </label>
        <br />
        <button type="submit">Публикувай</button>
      </form>
    </div>
  );
}