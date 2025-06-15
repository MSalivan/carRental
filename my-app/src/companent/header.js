import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src="../image_icon/car.png" alt="Логотип" />
        Прокат автомобилей
      </Link>

      <nav className={`menu-btn ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Главная</Link>
        <Link to="/vehicles" onClick={() => setMenuOpen(false)}>Транспорт</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>О нас</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Контакты</Link>
        <Link to="/account" className="profile-btn">
          <img src="/image_icon/profile.png" alt="Профиль" />
        </Link>
      </nav>

      <button className="burger" onClick={toggleMenu} aria-label="Переключить меню">
        &#9776;
      </button>
    </div>
  );
}

export default Header;
