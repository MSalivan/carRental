import '../styles/contact.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const posts = [
  { category: 'Новости', date: '2025-06-01', title: 'Запуск нового сервиса' },
  { category: 'Блог', date: '2025-05-25', title: 'Как выбрать автомобиль для аренды' },
  { category: 'Советы', date: '2025-05-10', title: 'Подготовка к поездке' },
];

function Contact() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className="contact">
        <div className="contact__hero">
          <div className="contact__form-wrapper">
            <h1 className="contact__title">Забронируй автомобиль</h1>
            <form className="contact__form">
              <select className="contact__select" defaultValue="">
                <option value="" disabled>Тип автомобиля</option>
                <option value="suv">Внедорожник (SUV)</option>
                <option value="sedan">Седан</option>
                <option value="compact">Компакт</option>
              </select>

              <select className="contact__select" defaultValue="">
                <option value="" disabled>Место аренды</option>
                <option value="new-york">Нью-Йорк</option>
                <option value="los-angeles">Лос-Анджелес</option>
                <option value="chicago">Чикаго</option>
              </select>

              <select className="contact__select" defaultValue="">
                <option value="" disabled>Место возврата</option>
                <option value="new-york">Нью-Йорк</option>
                <option value="los-angeles">Лос-Анджелес</option>
                <option value="chicago">Чикаго</option>
              </select>

              <input className="contact__input" type="date" placeholder="Дата аренды" />
              <input className="contact__input" type="date" placeholder="Дата возврата" />
            </form>
            <button className="contact__button" onClick={() => navigate('/booking')}>
              Забронировать
            </button>
          </div>
          <img className='contact__heroImageBG' src='../image_icon/M4-contact.jpg' alt="Автомобиль" />
          <img className='contact__heroImage' src='../image_icon/M4-contact.png' alt="Автомобиль" />
        </div>
      </div>

      <section className="blog-section">
        <div className="container">
          <h2 className="section-title">Последние статьи и новости</h2>
          <div className="posts-grid">
            {posts.map((post, index) => (
              <article className="post-card" key={index}>
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <a href="#" className="read-more">Читать далее →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="contact-footer-header">
        <div className="contact-footer-item">
          <div className="contact-footer-item-text">
            <p>Адрес</p>
            <b>Oxford Ave. Cary, NC 27511</b>
          </div>
        </div>

        <div className="contact-footer-item">
          <div className="contact-footer-item-text">
            <p>Электронная почта</p>
            <b>nwiger@yahoo.com</b>
          </div>
        </div>

        <div className="contact-footer-item">
          <div className="contact-footer-item-text">
            <p>Телефон</p>
            <b>+537 547-6401</b>
          </div>
        </div>

        <div className="contact-footer-item">
          <div className="contact-footer-item-text">
            <p>Время</p>
            <b>ПН-ВС 8:00 - 24:00</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
