import React, { useState } from 'react';
import './auth.scss';
import { Link } from 'react-router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });


  const handleError = (e) => {
    let valid = true;
    let newErrors = { username: '', password: '' };

    // --- USERNAME VALIDATION ---
    if (!username.trim()) {
      newErrors.username = 'Username is required!';
      valid = false;
    } else if (username !== 'hftr') {
      newErrors.username = 'Incorrect username! Please check again.';
      valid = false;
    }

    // --- PASSWORD VALIDATION ---
    if (!password) {
      newErrors.password = 'Password is required!';
      valid = false;
    } else if (password !== '123456') {
      newErrors.password = 'Incorrect password! Please check again.';
      valid = false;
    }

    // Errors state ko update karo
    setErrors(newErrors);

    if (valid) {
      alert('Login Successful! ');
      // Aage ka logic (API call wagera) yahan aayega
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleError(e);
  };

  
  return (
    <div className="login-contner">
      <div className="login-semi">
        <img src="/public/Instagram Logo.png" alt="" width={270} />

        <div className="text-conten">
          <div className="text-login">
            <h2>Let's sign you in</h2>
            <h3>
              welcome back,
              <br />
              you've been missed
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="">
              Username/email
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`user ${errors.username ? 'input-error-border text-red' : ''}`}
              />
              {errors.username && (
                <span className="error-text" style={{ color: 'red' }}>
                  {errors.username}
                </span>
              )}
            </label>
            <label htmlFor="">
              Password
              <input
                type="password"
                className={`user ${errors.password ? 'input-error-border text-red' : ''}`}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <span className="error-text" style={{ color: 'red' }}>
                  {errors.password}
                </span>
              )}
            </label>
            <h6>
              Do you have an account?
              <Link className="toggelauthform" to="/registration">
                Register
              </Link>
            </h6>

            <button type="submit" className="sing-in">
              sign-in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
