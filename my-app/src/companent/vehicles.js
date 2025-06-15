import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/vehicles.css';

function Vehicles() {
  const [activeTab, setActiveTab] = useState('all');
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch('http://localhost:5000/data');
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        const data = await response.json();
        setVehicles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  const filteredVehicles = activeTab === 'all'
    ? vehicles
    : vehicles.filter(vehicle =>
        vehicle.body_type.toLowerCase() === activeTab.toLowerCase()
      );

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">Ошибка: {error}</div>;

  return (
    <div className="car-container">
      <h1>Выберите группу транспортных средств</h1>

      <div className="tabs-btns">
        {[
          { key: 'all', label: 'Все автомобили' },
          { key: 'седан', label: 'Седан', icon: 'sedan' },
          { key: 'suv', label: 'SUV', icon: 'suv' },
          { key: 'минивэн', label: 'Минивэн', icon: 'minivan' },
          { key: 'пикап', label: 'Пикап', icon: 'pickup' },
          { key: 'кабриолет', label: 'Кабриолет', icon: 'cabriolet' }
        ].map(({ key, label, icon }) => (
          <button
            key={key}
            className={`tabs-button ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {icon && <img  src={`./image_icon/${icon}.png`} alt={label} />}
            {label}
          </button>
        ))}
      </div>

      <div className="card-container">
        {filteredVehicles.map(vehicle => (
          <div key={vehicle.id} className="modern-card">
            <img
              src={`http://localhost:5000/image_cars/${vehicle.photo}`}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="modern-card-image"
            />
            <h2 className="modern-title">{vehicle.brand} {vehicle.model}</h2>
            <p className="modern-subtitle">{vehicle.body_type}</p>
            <div className="modern-price">
              ${vehicle.price_per_day}
              <span className="per-day"> в день</span>
            </div>
            <div className="modern-features">
              <div>⚙️ {vehicle.transmission}</div>
              <div>⛽ {vehicle.fuel_type}</div>
              <div>❄️ {vehicle.air_conditioning ? 'Кондиционер' : 'Без кондиционера'}</div>
            </div>
            <button
              className="modern-button"
              onClick={() => navigate(`/details/${vehicle.id}`)}
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
