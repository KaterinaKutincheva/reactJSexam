import { useEffect, useState } from 'react';
import { getAllNews } from '../services/newsService';
import { Link } from 'react-router-dom';

export default function LatestNews() {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const all = getAllNews();
    const sorted = [...all].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const recent = sorted.slice(0, 4);
    setLatest(recent);
  }, []);

  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Последни новини</h2>
      <ul className="latest-news-list">
        {latest.map(news => (
          <li className="news-card" key={news._id}>
            <img src={news.imageUrl} alt={news.title} className="news-img" />
            <h3>{news.title}</h3>
            <small>{new Date(news.createdAt).toLocaleDateString()}</small>
            <p>{news.content.substring(0, 100)}...</p>
            <Link to={`/news/${news._id}`}>
              <button>Детайли</button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}