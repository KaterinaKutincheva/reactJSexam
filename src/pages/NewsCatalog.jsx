import { useEffect, useState } from 'react';

export default function NewsCatalog() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Временно фалшиви новини
    const dummyNews = [
      { _id: '1', title: 'Новина 1', content: 'Съдържание на новина 1' },
      { _id: '2', title: 'Новина 2', content: 'Съдържание на новина 2' },
      { _id: '3', title: 'Новина 3', content: 'Съдържание на новина 3' },
    ];

    setNews(dummyNews);
  }, []);

  return (
    <div>
      <h2>Каталог с новини</h2>
      <ul>
        {news.map(n => (
          <li key={n._id}>
            <h3>{n.title}</h3>
            <p>{n.content.substring(0, 50)}...</p>
            <button>Детайли</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
