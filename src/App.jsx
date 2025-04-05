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
import GuestRoute from './components/GuestRoute';
import PrivateRoute from './components/PrivateRoute';
import LatestNews from './components/LatestNews';
import './App.css';

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
      <h1>KNews 24/7</h1>
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
        <Route path="/" element={<LatestNews />} />
        <Route path="/news" element={<NewsCatalog />} />
        <Route path="/login" element={
          <GuestRoute><Login /></GuestRoute>
        } />
        <Route path="/register" element={
          <GuestRoute><Register /></GuestRoute>
        } />
        <Route path="/create" element={
          <PrivateRoute><CreateNews /></PrivateRoute>
        } />
        <Route path="/edit/:newsId" element={
          <PrivateRoute><EditNews /></PrivateRoute>
        } />
        <Route path="/news/:newsId" element={<NewsDetails />} />
      </Routes>
    </div>
  )
}

export default App