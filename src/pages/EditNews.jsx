import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNewsById, updateNews } from '../services/newsService';

export default function EditNews() {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: ''
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
        <button type="submit">Запази промените</button>
      </form>
    </div>
  );
}