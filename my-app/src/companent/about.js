import '../styles/about.css';
import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
function About() {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);}
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  
  const faqs = [
    {
      question: "Какие документы нужны для аренды автомобиля?",
      answer: "Понадобятся водительское удостоверение, паспорт и банковская карта для депозита."
    },
    {
      question: "Можно ли арендовать автомобиль без залога?",
      answer: "Некоторые тарифы предусматривают аренду без залога. Уточняйте при бронировании."
    },
    {
      question: "Есть ли ограничения по возрасту водителя?",
      answer: "Минимальный возраст — 21 год. Для премиум-класса — от 25 лет."
    },
    {
      question: "Можно ли выехать за пределы города на арендованном авто?",
      answer: "Да, поездки по стране разрешены. Выезд за границу — по согласованию."
    },
    {
      question: "Что делать в случае поломки авто?",
      answer: "Позвоните в нашу круглосуточную службу поддержки — мы оперативно заменим авто или решим проблему."
    },
    {
      question: "Как происходит оплата аренды?",
      answer: "Оплата возможна онлайн или при получении автомобиля, наличными или картой."
    },
    {
      question: "Могу ли я продлить аренду?",
      answer: "Да, продление возможно при наличии свободных автомобилей. Свяжитесь с нашей поддержкой."
    },
    {
      question: "Входит ли страховка в стоимость аренды?",
      answer: "Да, базовая страховка включена. Доступны дополнительные опции расширенного покрытия."
    },
    {
      question: "Можно ли арендовать авто с водителем?",
      answer: "Да, мы предоставляем услугу аренды автомобиля с профессиональным водителем."
    },
    {
      question: "Как отменить бронь?",
      answer: "Отмену можно оформить через приложение или по телефону. Бесплатная отмена — за 24 часа до начала аренды."
    }
  ];

const reviews = [
  {
    text: "Очень доволен сервисом! Быстрое оформление и отличный автомобиль. Рекомендую всем!",
    name: "Алексей Иванов",
    company: "ООО «АвтоПрокат»",
    image: "../client/user1.avif",
  },
  {
    text: "Удобный процесс аренды и внимательный персонал. Машина была в идеальном состоянии.",
    name: "Екатерина Смирнова",
    company: "Группа «ТрансАвто»",
    image: "../client/user2.avif",
  },
  {
    text: "Пользуюсь услугами не первый раз — всегда качественно и надежно. Спасибо за отличный сервис!",
    name: "Михаил Петров",
    company: "ИП «Петров и Ко»",
    image: "../client/user3.avif",
  },
];


return (
    <div className="about">
      <h1>О нас</h1>

      <section className="about-intro">
        <h2>Каждая поездка — незабываемое приключение</h2>
        <div className="about-features">
          <ul className="feature-list">
            <li><strong>Разнообразие брендов</strong></li>
            <p>Platea non auctor fermentum sollicitudin. Удобство, стиль и комфорт в каждой модели.</p>
          </ul>
          <ul className="feature-list">
            <li><strong>Доступные цены</strong></li>
            <p>Широкий выбор по отличным ценам, подходящим для любого бюджета.</p>
          </ul>
          <ul className="feature-list">
            <li><strong>Удобная аренда</strong></li>
            <p>Онлайн-бронирование, быстрая подача и поддержка 24/7.</p>
          </ul>
          <ul className="feature-list">
            <li><strong>Проверенные авто</strong></li>
            <p>Все автомобили проходят регулярную техническую проверку.</p>
          </ul>
        </div>

      </section>
              <div className="about-video">
          <video src="../image_icon/rentalVideo.mp4" controls />
        </div>
<section className="stats-section">
  <div className="stats-container">
    <div className="stat-item">
      <h2 className="stat-number">20K+</h2>
      <p className="stat-label">Довольных клиентов</p>
    </div>
    <div className="stat-item">
      <h2 className="stat-number">540+</h2>
      <p className="stat-label">Автомобилей в автопарке</p>
    </div>
    <div className="stat-item">
      <h2 className="stat-number">25+</h2>
      <p className="stat-label">Лет опыта</p>
    </div>
  </div>
</section>


<section className="benefits-section">
  <div className="benefits-container">
    <div className="benefits-content">
      <h2>Создавайте незабываемые моменты в пути</h2>
      <p className="benefits-description">
        Надежные автомобили и профессиональный сервис для вашего комфортного путешествия. 
        Оставьте рутину позади и наслаждайтесь каждой поездкой.
      </p>
      <ul className="benefits-list">
        <li>
          <span className="check-icon">✓</span>
          Современный автопарк премиум-класса
        </li>
        <li>
          <span className="check-icon">✓</span>
          Круглосуточная поддержка на всем маршруте
        </li>
        <li>
          <span className="check-icon">✓</span>
          Простая и быстрая процедура аренды
        </li>
        <li>
          <span className="check-icon">✓</span>
          Полная страховка включена в стоимость
        </li>
      </ul>
    </div>
    <div className="benefits-image">
      <img 
        src="./image_icon/aboutPhoto.png" 
        alt="Путешествие на автомобиле" 
      />
    </div>
  </div>
</section>

 <section className="app-download-section">
        <div className="phone-preview">
        <img src='../image_icon/phoneAbout.png' alt="App Preview" className="phone-image"/>
      </div>
      <div className="app-content">
        <h3>Download our app</h3>
<p className="app-description">
  Удобный интерфейс для быстрой аренды. Всегда на связи, простая регистрация и доступ ко всем функциям прямо в телефоне.
</p>

        
        <div className="download-buttons">
          <button className="download-btn" onClick={() => alert("Redirect to App Store")}>
            <img src='../image_icon/app-store.png' alt="App Store" className="store-icon"/>
            <div className="btn-text">
              <p>Download on the</p>
              <h4>App Store</h4>
            </div>
          </button>
          
          <button className="download-btn" onClick={() => alert("Redirect to Google Play")}>
            <img src='../image_icon/app.png' alt="Google Play" className="store-icon"/>
            <div className="btn-text">
              <p>GET IT ON</p>
              <h4>Google Play</h4>
            </div>
          </button>
        </div>
      </div>
    </section>

    <section className="reviews-section">
      <h2>Отзывы от наших клиентов</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="quote-icon">“</div>
            <p className="review-text">{review.text}</p>
            <div className="review-footer">
              <img src={review.image} alt="Клиент" className="review-avatar" />
              <div className="review-info">
                <span className="review-company">{review.company}</span>
                <strong className="review-name">{review.name}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="faq-section">
      <h2 className="faq-title">Часто задаваемые вопросы</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
<div className="faq-question" onClick={() => toggle(index)}>
  <strong>{faq.question}</strong>
  <img
    className="arrow"
    src={activeIndex === index ? "../image_icon/arrow-down.png" : "../image_icon/arrow-up.png"}
    alt="Toggle Arrow"
  />
</div>

            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

<div className="hero-about">


  <div className="hero-about__content">
<h1 className="hero-about__title">Ищете автомобиль?</h1>
<h2 className="hero-about__phone">+537 547-6401</h2>

      <p
        className={`hero-about__description ${isExpanded ? "expanded" : ""}`}
        onClick={toggleDescription}
      >
Выбирайте комфорт и уверенность в каждой поездке. Наши автомобили проходят регулярное обслуживание, чтобы ваше путешествие было безопасным и приятным. Простое оформление аренды, круглосуточная поддержка и гибкие условия — всё для вашего удобства.
      </p>  
    <button className="hero-about__button" onClick={() => Navigate(`/vehicles`)}>
      Забронировать 
    </button>
  </div>
  <div className="hero-about__image">
    <img className="hero-about__img" src="../image_icon/m3.png" alt="автомобиль" />
  </div>
</div>

    </div>
  );
}

export default About;
