import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { createNews } from '../services/newsService';

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

    createNews(formData, auth.email);
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