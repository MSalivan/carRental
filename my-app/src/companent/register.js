import { useState } from "react";
import "../styles/auth.css";

function RegisterPage({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        onRegister(data.token); // передаем токен наверх
      } else {
        alert(data.message || "Ошибка регистрации");
      }
    } catch (error) {
      alert("Ошибка подключения к серверу");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container right">
      <img src="/reg-auth/M4_log.png" alt="Background" className="auth-bg-img log" />
      <div className="auth-card">
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Регистрация..." : "Зарегистрироваться"}
          </button>
        </form>
        <div className="auth-footer">
          <p>
            Уже есть аккаунт? <a href="/auth">Войти</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
