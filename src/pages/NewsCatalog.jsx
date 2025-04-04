import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllNews } from '../services/newsService';

export default function NewsCatalog() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const news = getAllNews();
    setNews(news);
  }, []);

  return (
    <div>
      <h2>Каталог с новини</h2>
      <ul>
        {news.map(n => (
          <li key={n._id}>
            <h3>{n.title}</h3>
            <p>{n.content.substring(0, 50)}...</p>
            <Link to={`/news/${n._id}`}>
              <button>Детайли</button>
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
}
