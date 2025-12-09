import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="main-navigation">
      <div className="nav-brand">
        <Link to="/">
          <h2>Трекер технологий</h2>
        </Link>
      </div>

      <ul className="nav-menu">
        <li>
          <Link to="/" className={isActive('/')}>Главная</Link>
        </li>
        <li>
          <Link to="/technologies" className={isActive('/technologies')}>
            Все технологии
          </Link>
        </li>
        <li>
          <Link to="/add-technology" className={isActive('/add-technology')}>
            Добавить технологию
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;