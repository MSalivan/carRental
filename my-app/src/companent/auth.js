import { useState } from "react";
import "../styles/auth.css";

function Auth({ onLogin }) {  // поправил проп на onLogin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    setLoading(true);
    try {
      // Разные URL для логина и регистрации
      const url = isLogin ? "http://localhost:5000/api/login" : "http://localhost:5000/api/register";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        onLogin(data.token); // передаем токен наверх
      } else {
        alert(data.message || "Ошибка аутентификации");
      }
    } catch (error) {
      alert("Ошибка подключения к серверу");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setIsLogin((prev) => !prev);
      setFadeClass("fade-in");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }, 500);
  };

  return (
    <div className={`auth-container ${isLogin ? "" : "right"}`}>
      <img
        src={isLogin ? "/reg-auth/M4_reg.png" : "/reg-auth/M4_log.png"}
        alt="Background"
        className={`auth-bg-img ${isLogin ? "" : "log"}`}
      />

      <div className={`auth-card ${fadeClass}`}>
        <h2>{isLogin ? "Вход в аккаунт" : "Регистрация"}</h2>
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
          {!isLogin && (
            <input
              type="password"
              placeholder="Подтвердите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? (isLogin ? "Вход..." : "Регистрация...") : isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <p>
              Нет аккаунта?{" "}
              <button onClick={toggleAuthMode} className="link-button">
                Зарегистрироваться
              </button>
            </p>
          ) : (
            <p>
              Уже есть аккаунт?{" "}
              <button onClick={toggleAuthMode} className="link-button">
                Войти
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
