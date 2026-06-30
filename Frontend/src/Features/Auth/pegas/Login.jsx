import { useState } from 'react';
import { Link } from 'react-router';
import { useAuth } from '../Hook/useAuth';
import '../Style/auth.scss';
import '/src/Shared/loder.scss';
import { useNavigate } from 'react-router';

export default function Login() {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', password: '' });

  const handelerr = (e) => {
    let valid = true;
    let newErrors = { name: '', password: '' };

    // --- name VALIDATION ---
    if (!name.trim()) {
      newErrors.name = 'name is required!';
      valid = false;
    }

    // --- PASSWORD VALIDATION ---
    if (!password) {
      newErrors.password = 'Password is required!';
      valid = false;
    }

    // Errors state ko update karo
    setErrors(newErrors);

    // if (valid) {
    //   alert('Login Successful ');
    //   // Aage ka logic (API call wagera) yahan aayega
    // }
  };

  const { handellogin, loading } = useAuth();

  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    handelerr(e);

    handellogin(name, password);
    navigate("/feed")

  };

  if (loading) {
    return (
      <main>
        <div class="loader"></div>
      </main>
    );
  }

  return (
    <main>
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
              <div className="input-group">
                <label>name/email</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  className={`user ${errors.name ? 'input-error-border text-red' : ''}`}
                />
                {errors.name && (
                  <span className="error-text" style={{ color: 'red' }}>
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className={`user ${errors.password ? 'input-error-border text-red' : ''}`}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <span className="error-msg" style={{ color: 'red' }}>
                    {errors.password}
                  </span>
                )}
              </div>

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
    </main>
  );
}
