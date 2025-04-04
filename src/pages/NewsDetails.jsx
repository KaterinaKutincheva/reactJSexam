import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NewsDetails() {
    const { newsId } = useParams();
    const [newsItem, setNewsItem] = useState(null);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const onDelete = () => {
        const confirmDelete = confirm('Сигурни ли сте, че искате да изтриете тази новина?');

        if (confirmDelete) {
            console.log(`Изтриване на новина с ID: ${newsId}`);
            // Ивикване DELETE заявка към бекенда
            navigate('/news');
        }
    };


    useEffect(() => {

        const dummyNews = [
            {
                _id: '1',
                title: 'Новина 1',
                content: 'Пълно съдържание на новина 1',
                author: 'test@test.bg'
            },
            {
                _id: '2',
                title: 'Новина 2',
                content: 'Пълно съдържание на новина 2',
                author: 'admin@site.com'
            },
            {
                _id: '3',
                title: 'Новина 3',
                content: 'Пълно съдържание на новина 3',
                author: 'test@test.bg'
            }
        ];

        const foundNews = dummyNews.find(n => n._id === newsId);
        setNewsItem(foundNews);
    }, [newsId]);

    if (!newsItem) {
        return <p>Зареждане на новината...</p>;
    }

    return (
        <div>
            <h2>{newsItem.title}</h2>
            <p>{newsItem.content}</p>

            {auth.email === newsItem.author && (
                <>
                    <Link to={`/edit/${newsItem._id}`}>
                        <button>Редактирай</button>
                    </Link>

                    <button onClick={onDelete}>Изтрий</button>
                </>
            )}
        </div>
    );
}