import '../styles/account.css';

function Account({ onLogout }) {
  return (
    <div className="account">

      <div className="profile-section">
        <div className="profile-photo">
          <img src="/image_icon/profile.png" alt="Profile" />
          <button className="edit-photo-btn">Изменить фото</button>
        </div>

        <div className="profile-info">
          <h2>Личные данные</h2>
          <p><strong>ФИО:</strong> Иванов Иван</p>
          <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
          <p><strong>Почта:</strong> ivanov@mail.ru</p>
          <p><strong>Паспорт:</strong> 1234 567890</p>
          <p><strong>Вод. удостоверение:</strong> 77 77 123456</p>

          <h3>Изменить пароль</h3>
          <button className="change-password-btn">Изменить пароль</button>

          <h3>Банковские карты</h3>
          <ul className="cards-list">
            <li>**** **** **** 1234</li>
            <li>**** **** **** 5678</li>
          </ul>
          <button className="add-card-btn">Добавить карту</button>
        </div>
        <button onClick={onLogout} className="logout">Выйти</button>
      </div>

      <div className="trips-section">
        <h2>История поездок</h2>

        <div
          className="trip-card"
          style={{
            backgroundImage: "url('http://localhost:5000/image_cars/bmw/x5/x5(1).jfif')",
          }}
        >
          <div className="trip-card-text">
            <h3>BMW X5 (2023)</h3>
            <p><strong>Дата:</strong> 01.06.2025 — 03.06.2025</p>
            <p><strong>Маршрут:</strong> Москва → Санкт-Петербург</p>
            <p><strong>Стоимость:</strong> 9 000 ₽ (3 дня)</p>
            <button className="repeat-trip-btn">Повторить поездку</button>
          </div>
        </div>

        <div
          className="trip-card"
          style={{
            backgroundImage: "url('http://localhost:5000/image_cars/mercedes/cls63AMG/cls63AMG(1).avif')",
          }}
        >
          <div className="trip-card-text">
            <h3>Mercedes cls 63 AMG</h3>
            <p><strong>Дата:</strong> 15.05.2025 — 16.05.2025</p>
            <p><strong>Маршрут:</strong> Казань → Нижний Новгород</p>
            <p><strong>Стоимость:</strong> 4 500 ₽ (1 день)</p>
            <button className="repeat-trip-btn">Повторить поездку</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Account;
