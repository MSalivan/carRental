import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/details.css';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainPhoto, setMainPhoto] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    carType: '',
    pickupLocation: '',
    returnLocation: '',
    pickupDate: '',
    returnDate: '',
  });

  const fetchCar = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/data/${id}`);
      if (!response.ok) throw new Error('Ошибка загрузки данных автомобиля');

      const data = await response.json();
      setCar(data);
      setMainPhoto(data.photo);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCar();
  }, [id]);

  useEffect(() => {
    if (car) {
      setFormData(prev => ({
        ...prev,
        carType: car.type || '',
      }));
    }
  }, [car]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Рассчет дней аренды
  const calculateDays = () => {
    if (!formData.pickupDate || !formData.returnDate) return 0;
    const start = new Date(formData.pickupDate);
    const end = new Date(formData.returnDate);
    const diffTime = end - start;
    if (diffTime < 0) return 0;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  };

  const totalDays = calculateDays();
  const totalPrice = car && car.price_per_day ? totalDays * car.price_per_day : 0;

  const handleBookingSubmit = () => {
    const { pickupLocation, returnLocation, pickupDate, returnDate } = formData;
    if (!pickupLocation || !returnLocation || !pickupDate || !returnDate) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    if (new Date(returnDate) < new Date(pickupDate)) {
      alert('Дата возврата не может быть раньше даты аренды');
      return;
    }

    // Здесь можно сделать POST-запрос на сервер с formData

    // После успешной отправки:
    setShowForm(false);              // Скрываем форму
    setShowSuccessMessage(true);     // Показываем сообщение

    // Очистка формы (если нужно)
    setFormData({
      carType: car.type || '',
      pickupLocation: '',
      returnLocation: '',
      pickupDate: '',
      returnDate: '',
    });

    // Если хочешь перенаправлять, можешь добавить:
    // navigate('/booking');
  };

  const closeForm = () => {
    setShowForm(false);
    setShowSuccessMessage(false);
    setFormData({
      carType: car?.type || '',
      pickupLocation: '',
      returnLocation: '',
      pickupDate: '',
      returnDate: '',
    });
  };

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        <p>Ошибка: {error}</p>
        <button onClick={fetchCar}>Повторить загрузку</button>
      </div>
    );

  if (!car) return <div>Car not found</div>;

  const galleryPhotos = [
    car.photo,
    car.photo_1,
    car.photo_2,
    car.photo_3,
    car.photo_4,
    car.photo_5,
    car.photo_6,
    car.photo_7,
    car.photo_8,
    car.photo_9,
  ].filter(Boolean);

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="details">
      <div className="car-details-image">
        <div className="car-img-text">
          <img
            src={`http://localhost:5000/image_cars/${mainPhoto}`}
            alt={car.brand ? `${car.brand} ${car.model}` : 'Car'}
            className="main-photo"
          />
          <div className="overlay-text">
            <h1>{car.brand} {car.model}</h1>
            <h2>{car.price_per_day ? `$${car.price_per_day}` : 'N/A'} <span>/день</span></h2>
          </div>
        </div>

        <div className="gallery">
          {galleryPhotos.map((photo, idx) => (
            <img
              key={idx}
              src={`http://localhost:5000/image_cars/${photo}`}
              alt={`Фото ${idx + 1} - ${car.brand} ${car.model}`}
              onClick={() => setMainPhoto(photo)}
              style={{
                cursor: 'pointer',
                border: photo === mainPhoto ? '3px solid #007bff' : '2px solid transparent',
                opacity: photo === mainPhoto ? 1 : 0.7,
                transition: 'all 0.3s ease',
                width: '80px',
                height: '60px',
                objectFit: 'cover',
                marginRight: '8px',
                borderRadius: '4px',
              }}
            />
          ))}
        </div>
      </div>

      <div className="car-content">
        <div className="car-info">
          <h2>О автомобиле</h2>
          <p>{car.description || 'Описание отсутствует'}</p>

          <button className="book-now" onClick={() => setShowForm(true)}>
            Забронировать
          </button>

          {showSuccessMessage && (
            <div className="confirmation-message" >
              Заказ принят, скоро с вами свяжутся
            </div>
          )}

          {showForm && (
            <>
              <div className="details-overlay" onClick={closeForm}></div>
              <div className="details-hero_form">
                <h1>Забронируй автомобиль</h1>
                <form
                  className="details-form-inputs"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleBookingSubmit();
                  }}
                >
                  <input
                    type="text"
                    name="carBrandModel"
                    value={`${car.brand} ${car.model}`}
                    readOnly
                    style={{ marginBottom: '10px', fontWeight: '100' }}
                  />
                  <input
                    type="text"
                    name="carBodyType"
                    value={`${car.body_type}`}
                    readOnly
                    style={{ marginBottom: '10px', fontWeight: '100' }}
                  />

                  <select
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Место аренды
                    </option>
                    <option value="new-york">Нью-Йорк</option>
                    <option value="los-angeles">Лос-Анджелес</option>
                    <option value="chicago">Чикаго</option>
                  </select>

                  <select
                    name="returnLocation"
                    value={formData.returnLocation}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Место возврата
                    </option>
                    <option value="new-york">Нью-Йорк</option>
                    <option value="los-angeles">Лос-Анджелес</option>
                    <option value="chicago">Чикаго</option>
                  </select>

                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    min={today}
                    required
                  />
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    min={formData.pickupDate || today}
                    required
                  />

                  {formData.pickupLocation &&
                   formData.returnLocation &&
                   formData.pickupDate &&
                   formData.returnDate &&
                   new Date(formData.returnDate) >= new Date(formData.pickupDate) && (
                    <div className="price-cont">
                      Стоимость аренды:
                      <div className='price'>
                        {totalPrice}$ ({totalDays} {totalDays === 1 ? 'день' : 'дней'})
                      </div>
                    </div>
                  )}

                  <button type="submit" className="book-now">Подтвердить бронирование</button>
                  <button type="button" className="book-now" onClick={closeForm}>
                    Закрыть
                  </button>
                </form>
              </div>
            </>
          )}
        </div>

        <div className="technical-specs">
          <h2>Технические характеристики</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <h4>Коробка передач</h4>
              <p>{car.transmission || 'N/A'}</p>
            </div>
            <div className="spec-item">
              <h4>Топливо</h4>
              <p>{car.fuel_type || 'N/A'}</p>
            </div>
            <div className="spec-item">
              <h4>Двери</h4>
              <p>{car.doors || 'N/A'}</p>
            </div>
            <div className="spec-item">
              <h4>Макс. скорость</h4>
              <p>{car.max_speed ? `${car.max_speed} км/ч` : 'N/A'}</p>
            </div>
            <div className="spec-item">
              <h4>Объем двигателя</h4>
              <p>{car.engine_capacity || 'N/A'}</p>
            </div>
            <div className="spec-item">
              <h4>Мощность</h4>
              <p>{car.horsepower ? `${car.horsepower} л.с.` : 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
