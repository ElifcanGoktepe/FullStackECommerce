import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom'; // Yönlendirme için

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Sayfa yönlendirmesi için hook

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = {
      email,
      password
    };

    try {
      const response = await fetch('http://34.10.50.108:9090/dev/v1/user/login-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      const result = await response.json();

      if (response.ok && result.data) {
        // JWT token geldi, localStorage'a kaydediyoruz
        localStorage.setItem('token', result.data);
        alert('Login successful!');

        // Örnek yönlendirme: ana sayfaya
        navigate('/');
      } else {
        alert('Login unsuccessful: ' + result.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Unexpected error.');
    }
  };

  return (
    <div className="wrapper" style={{ backgroundImage: 'url("/img/bg-registration-form-2.jpg")' }}>
      <div className="inner">
        <form onSubmit={handleLogin}>
          <h3>Login Page</h3>

          <div className="form-wrapper">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-wrapper">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>

          <div className="form-wrapper mt-3 text-center">
            <a href="/register">Create new account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
