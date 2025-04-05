
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getNewsById } from '../services/newsService';
import { deleteNews } from '../services/newsService';


export default function NewsDetails() {
    const { newsId } = useParams();
    const [newsItem, setNewsItem] = useState(null);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const onDelete = () => {
        const confirmDelete = confirm('Сигурни ли сте, че искате да изтриете тази новина?');

        if (confirmDelete) {
            deleteNews(newsId);
            navigate('/news');
        }
    };

    useEffect(() => {
        const foundNews = getNewsById(newsId);
        setNewsItem(foundNews);
    }, [newsId]);

    if (!newsItem) {
        return <p>Зареждане на новината...</p>;
    }

    return (
        <div>
            <h2>{newsItem.title}</h2>
            <img src={newsItem.imageUrl} alt={newsItem.title} className="news-details-img" />
            <small>Публикувана на: {new Date(newsItem.createdAt).toLocaleDateString()}</small>
            <p>Автор: {newsItem.author}</p>
            <p>{newsItem.content}</p>

            {auth.email === newsItem.author && (
                <div style={{ marginTop: '1rem' }}>
                    <Link to={`/news/${newsItem._id}/edit`}>
                        <button>Редактирай</button>
                    </Link>

                    <button onClick={onDelete} style={{ marginLeft: '1rem' }}>
                        Изтрий
                    </button>
                </div>
            )}
        </div>
    );
}