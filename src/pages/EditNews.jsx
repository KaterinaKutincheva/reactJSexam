import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditNews() {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    // Зареждане на новината по ID (временно – фалшиви данни)
    const dummyNews = [
      { _id: '1', title: 'Новина 1', content: 'Пълно съдържание на новина 1' },
      { _id: '2', title: 'Новина 2', content: 'Пълно съдържание на новина 2' },
      { _id: '3', title: 'Новина 3', content: 'Пълно съдържание на новина 3' },
    ];

    const foundNews = dummyNews.find(n => n._id === newsId);
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
    console.log('Обновена новина:', newsId, formData);
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