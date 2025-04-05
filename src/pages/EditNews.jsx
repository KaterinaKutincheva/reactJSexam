import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNewsById, updateNews } from '../services/newsService';

export default function EditNews() {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: ''
  });

  useEffect(() => {
    const foundNews = getNewsById(newsId);
    if (foundNews) {
      setFormData({ title: foundNews.title, content: foundNews.content });
    }
  }, [newsId]);

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

    updateNews(newsId, formData);
    navigate(`/news/${newsId}`);
  };

  return (
    <div>
      <h2>Редактирай новина</h2>
      <form onSubmit={onSubmit}>
        <label>
          Заглавие:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Съдържание:
          <textarea
            name="content"
            value={formData.content}
            onChange={onChange}
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
        <button type="submit">Запази промените</button>
      </form>
    </div>
  );
}