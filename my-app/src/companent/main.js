import '../styles/main.css';
import Vehicles from './vehicles.js';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
  return (
    <div className="main">
      <div className="hero">
        <div className="heroImage">
          <img className="img-car" src="../image_icon/m3.png" alt="автомобиль" />
        </div>

<div className="hero_text">
  <h1>Почувствуй дорогу как никогда раньше</h1>
  <p>
    Ощути свободу движения с нашими автомобилями. Комфорт, надёжность и стиль — всё, что нужно для идеальной поездки.
  </p>
  <button onClick={() => navigate(`/vehicles`)}>Посмотреть все автомобили</button>
</div>


        <div className="hero_form">
          <h1>Забронируй автомобиль</h1>
          <form className="form-inputs">
            <select defaultValue="">
              <option value="" disabled>Тип автомобиля</option>
              <option value="suv">Внедорожник (SUV)</option>
              <option value="sedan">Седан</option>
              <option value="compact">Компакт</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>Место аренды</option>
              <option value="new-york">Нью-Йорк</option>
              <option value="los-angeles">Лос-Анджелес</option>
              <option value="chicago">Чикаго</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>Место возврата</option>
              <option value="new-york">Нью-Йорк</option>
              <option value="los-angeles">Лос-Анджелес</option>
              <option value="chicago">Чикаго</option>
            </select>

            <input type="date" placeholder="Дата аренды" />
            <input type="date" placeholder="Дата возврата" />
          </form>
          <button onClick={() => navigate(`/contact`)} >Забронировать</button>
        </div>
      </div>

      <div className='info_block'>
        <section className='block'>
          <img src='../image_icon/point.png' className='block-icon'/>
          <h1>Доступность</h1>
          <p>Диам тинциндунт тинциндунт эрат ат семпер ферментум. Ид ультрициес квис</p>
        </section>
        <section className='block'>
          <img src='../image_icon/car1.png' className='block-icon'/>
          <h1>Комфорт</h1>
          <p>Гравида аукто ферментум морби вульпутате ак эгестас орциетиум конваллис</p>
        </section>
        <section className='block'>
          <img src='../image_icon/wallet.png' className='block-icon'/>
          <h1>Экономия</h1>
          <p>Претиум конваллис ид диам сед комодо вестибулюм лобортис волуптат</p>
        </section>
      </div>

      <div className='info_block-second'>
        <img src='../image_icon/human.png'/>
        <div className="advantages-list">
          <div className="advantage-item">
            <div className="advantage-number">1</div>
            <div>
              <h3>Лёгкое бронирование</h3>
              <p>Бронируйте автомобиль за считанные минуты через удобный интерфейс — без лишней бумажной волокиты.</p>
            </div>
          </div>

          <div className="advantage-item">
            <div className="advantage-number">2</div>
            <div>
              <h3>Широкий выбор</h3>
              <p>От компактных авто до премиальных внедорожников — у нас есть транспорт под любые цели и бюджет.</p>
            </div>
          </div>

          <div className="advantage-item">
            <div className="advantage-number">3</div>
            <div>
              <h3>Доступные цены</h3>
              <p>Честные и прозрачные тарифы без скрытых комиссий. Регулярные скидки и спецпредложения для постоянных клиентов.</p>
            </div>
          </div>

          <div className="advantage-item">
            <div className="advantage-number">4</div>
            <div>
              <h3>Поддержка 24/7</h3>
              <p>Наша служба поддержки работает круглосуточно, чтобы помочь вам в любой ситуации на дороге.</p>
            </div>
          </div>
        </div>
      </div>

      <Vehicles/>

<div className='banner'>
  <div className='bannerImage'>
    <img className='img-car' src='./image_icon/mers.png' alt='Автомобиль' />
  </div>
  <h1>Факты в цифрах</h1>
  <p>Наш автопарк и опыт говорят сами за себя. Мы предоставляем качественный сервис и гарантируем надёжность каждому клиенту.</p>
  <div className='banner-items'>
    <div className='banner-item'>
      <img src='./image_icon/carwhite.png' alt='Иконка автомобиля' />
      <div className='banner-item-text'>
        <h2>540+</h2>
        <p>Автомобилей</p>
      </div>
    </div>
    <div className='banner-item'>
      <img src='./image_icon/client.png' alt='Иконка клиента' />
      <div className='banner-item-text'>
        <h2>20K+</h2>
        <p>Клиентов</p>
      </div>
    </div>
    <div className='banner-item'>
      <img src='./image_icon/calendar.png' alt='Иконка календаря' />
      <div className='banner-item-text'>
        <h2>25+</h2>
        <p>Лет на рынке</p>
      </div>
    </div>
    <div className='banner-item'>
      <img src='../image_icon/Speedometer.png' alt='Иконка спидометра' />
      <div className='banner-item-text'>
        <h2>20M+</h2>
        <p>Пробега</p>
      </div>
    </div>
  </div>
</div>


      <div className='frame'>
        <div className='frame-text'>
          <h1>Скачайте мобильное приложение</h1>
<p>
  Откройте для себя новые маршруты и впечатления. Удобный поиск, актуальная информация и точные прогнозы помогут вам подготовиться к любому путешествию. Мы заботимся о вашем комфорте, чтобы вы могли наслаждаться дорогой, а не беспокоиться о деталях. С нами каждая поездка — это удовольствие.
</p>
<div className='frameButton'>
            <button className='frame-btn'>
              <img src='./image_icon/app-store.png'/>
              <div className='frame-btn-text'  onClick={() =>alert("по нету")}>
                <p>Download on the</p>
                <h2>App Store</h2>
              </div>
            </button>
            <button className='frame-btn'>
              <img src='./image_icon/app.png'/>
              <div className='frame-btn-text' onClick={() =>alert("по нету")}>
                <p>GET IT ON</p>
                <h2>Google Play</h2>
              </div>
            </button>
          </div>
        </div>
        <div className='frameImage'>
          <img src='./image_icon/phone.png'/>
        </div>
      </div>

      <div className="intro-section">
        <div className="intro-content">
          <h3 className="intro-title">
            Наслаждайтесь каждым километром с <br /> очаровательной компанией.
          </h3>
          <p className="intro-subtitle">
          Комфорт начинается здесь. Каждый маршрут становится проще, каждая дорога — ближе. Доверьтесь точности и будьте уверены в своем пути.</p>

          <div className="city-search">
            <input className="city-input" type="text" placeholder="Город" />
            <button className="search-btn" onClick={() =>alert("разработчик еще не придумал")}>Поиск</button>
          </div>
        </div>
        <img className="intro-image " src="./image_icon/m5.png" alt="машина" />
      </div>
    </div>
  );
}

export default Main;
