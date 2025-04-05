import { useEffect, useState } from 'react';

const API_KEY = '244783e630328f60d869e45f3ba75b91';
const CITY = 'Rousse';

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=bg`
    )
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.error('Weather error:', err));
  }, []);

  if (!weather) return <p>Зареждане на времето...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <h3>Времето в {CITY}:</h3>
      <p>{weather.weather[0].description}, {Math.round(weather.main.temp)}°C</p>
    </div>
  );
}
