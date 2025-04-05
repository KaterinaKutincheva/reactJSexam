import { Link } from 'react-router-dom';
import LatestNews from '../components/LatestNews';
import Weather from '../components/Weather';

export default function Home() {
  return (
    <div className="home-page">

      <Weather />

      <LatestNews />

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/news">
          <button>Виж всички новини</button>
        </Link>
      </div>
    </div>
  );
}
