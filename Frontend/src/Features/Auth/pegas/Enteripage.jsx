import React from 'react'
import '../Style/auth.scss';
import { Link } from 'react-router';

export default function Enteripage() {
  return (
    <div>
      <div>
        <div className="Front-contner">
          <div className="Front-semi">
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
      </div>
    </div>
  );
}

