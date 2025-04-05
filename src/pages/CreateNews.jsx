import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { createNews } from '../services/newsService';

export default function CreateNews() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: ''
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

    if (!formData.title || formData.title.length < 3) {
      alert('Заглавието трябва да е поне 3 символа.');
      return;
    }

    if (!formData.content || formData.content.length < 10) {
      alert('Съдържанието трябва да е поне 10 символа.');
      return;
    }

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
        <label>
          Линк към снимка:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={onChange}
            placeholder="https://..."
          />
        </label>
        <br />
        <button type="submit">Публикувай</button>
      </form>
    </div>
  );
}