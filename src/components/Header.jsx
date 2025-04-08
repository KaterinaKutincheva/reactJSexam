import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import './Header.css';

export default function Header() {
    const { auth, logout } = useContext(AuthContext);

    return (
        <header className="site-header">
            <div className="header-content">
                <img
                    src="https://dl.dropboxusercontent.com/scl/fi/sed8yz64g18i1qc8nddel/web-logo.svg?rlkey=zmf26mhlw1pgbavmw0zuzrnfe"
                    alt="KNews Logo"
                    className="logo"
                />
                <h1 className="site-title">KNews 24/7</h1>
            </div>

            <nav>
                <ul className="nav-list">
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
                            <li><button onClick={logout}>Изход</button></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}