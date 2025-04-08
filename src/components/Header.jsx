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
                    src="/web-logo.svg"
                    alt="KNews Logo"
                    className="logo"
                />
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