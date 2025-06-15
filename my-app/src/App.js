import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Main from './companent/main';
import Vehicles from './companent/vehicles.js';
import Details from './companent/details';
import About from './companent/about';
import Contact from './companent/contact';
import Header from './companent/header';
import Footer from './companent/footer';
import Account from './companent/account';
import Auth from './companent/auth';
import RegisterPage from './companent/register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/account"
            element={
              isAuthenticated ? (
                <Account onLogout={handleLogout} />
              ) : (
                <Navigate to="/auth" replace />
              )
            }
          />

          <Route
            path="/auth"
            element={
              isAuthenticated ? (
                <Navigate to="/account" replace />
              ) : (
                <Auth onLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/register"
            element={
              isAuthenticated ? (
                <Navigate to="/account" replace />
              ) : (
                <RegisterPage onRegister={handleLogin} />
              )
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
