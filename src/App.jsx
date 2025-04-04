import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'
import NewsCatalog from './pages/NewsCatalog'
import CreateNews from './pages/CreateNews'
import { useNavigate } from 'react-router-dom';
import NewsDetails from './pages/NewsDetails';
import EditNews from './pages/EditNews';

function App() {
  // Извличане на auth и logout от AuthContext
  const { auth, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // връщане на начална страница
  };

  return (
    <div>
      <h1>News Portal</h1>
      <h2>Добре дошли в нашия новинарски портал!</h2>
      <nav>
        <ul>
          <li><Link to="/">Начало</Link></li>
          <li><Link to="/news">Новини</Link></li>

          {!auth.email && (
            <>
              <li><Link to="/login">Вход</Link></li>
              <li><Link to="/register">Регистрация</Link></li>
            </>
          )}

          {auth.email && (
            <>
              <li><Link to="/create">Създай новина</Link></li>
              <li><button onClick={handleLogout}>Изход</button></li>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Начална страница</h2>} />
        <Route path="/news" element={<NewsCatalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateNews />} />
        <Route path="/news/:newsId" element={<NewsDetails />} />
        <Route path="/edit/:newsId" element={<EditNews />} />
      </Routes>
    </div>
  )
}

export default App