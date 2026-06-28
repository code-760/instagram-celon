import React from 'react'
import { Link } from 'react-router';
import "./Front.scss"

export default function Front() {
  return (
    <div>
      <div className="login-contner">
        <div className="login-semi">
          <img src="/public/Instagram Logo.png" alt="" width={270} />

          <div className="text-conten">
            <div className="text-login">
              <h2>Welcome to Instagram</h2>
              <h3>
                Sign in to see photos and videos
                <br />
                from your friends
              </h3>
            </div>

            <Link className="lest-setart" to="/login">
              <button className="sing-in-lest">Let's Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}


