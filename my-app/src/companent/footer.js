import { useState } from 'react';
import '../styles/footer.css';

function Footer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="footer">
      <div className="footer-header">
        <div className="logo">
          <img src="../image_icon/car.png" alt="Логотип" />
          <p>Прокат автомобилей</p>
        </div>

        <div className="footer-contact-item">
          <img src="./image_icon/point.png" alt="Адрес" />
          <div className="footer-contact-item-text">
            <p>Адрес</p>
            <b>Oxford Ave. Cary, NC 27511</b>
          </div>
        </div>

        <div className="footer-contact-item">
          <img src="./image_icon/gmail.png" alt="Электронная почта" />
          <div className="footer-contact-item-text">
            <p>Электронная почта</p>
            <b>nwiger@yahoo.com</b>
          </div>
        </div>

        <div className="footer-contact-item">
          <img src="./image_icon/telephone.png" alt="Телефон" />
          <div className="footer-contact-item-text">
            <p>Телефон</p>
            <b>+537 547-6401</b>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-description">
          <p
            className={`text-content ${expanded ? 'expanded' : ''}`}
            onClick={() => setExpanded(!expanded)}
          >
            Фаусибус фаусибус пеллентескве диктум турпис. Ид пеллентескве турпис масса а ид иакулис лорем турпис эуисмод. Пурус ат киске интегер сит. Либеро кис сапиен темпус пеллентескве нетус лео феугиат аугуе ут. Соллицитудин витэ диктум сед вульпутате.
            {/* Здесь можно заменить на нормальный русский текст, если надо */}
          </p>

          <div className="social-icons">
            <img src="./image_icon/facebook.png" alt="facebook" className="social-icon" onClick={() =>alert("по нету")} />
            <img src="./image_icon/social-media.png" alt="instagram" className="social-icon" onClick={() =>alert("по нету")} />
            <img src="./image_icon/twitter.png" alt="x" className="social-icon" onClick={() =>alert("по нету")} />
            <img src="./image_icon/social.png" alt="youtube" className="social-icon"  onClick={() =>alert("по нету")}/>
          </div>
        </div>

        <div className="footer-lists">
          <ul className="footer-links">
            <p className="list-title">Полезные ссылки</p>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Галерея</li>
            <li>Блог</li>
            <li>Часто задаваемые вопросы</li>
          </ul>

          <ul className="footer-links">
            <p className="list-title">Транспорт</p>
            <li>Седан</li>
            <li>Кабриолет</li>
            <li>Пикап</li>
            <li>Минивэн</li>
            <li>Внедорожник</li>
          </ul>
        </div>

        <div className="footer-buttons">
          <button className="footer-btn">
            <img src="./image_icon/app-store.png" alt="App Store" />
            <div className="footer-btn-text"  onClick={() =>alert("по нету")}>
              <p>Download on the</p>
              <h2>App Store</h2>
            </div>
          </button>

          <button className="footer-btn">
            <img src="./image_icon/app.png" alt="Google Play" />
            <div className="footer-btn-text"  onClick={() =>alert("по нету")}>
              <p>GET IT ON</p>
              <h2>Google Play</h2>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
  