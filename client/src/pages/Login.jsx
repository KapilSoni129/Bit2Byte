import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input className="toggle" type="checkbox" />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form action="" className="flip-card__form">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="flip-card__input"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="flip-card__input"
                  />
                  <button
                    className="flip-card__btn"
                    onClick={handleNavigation}
                  >
                    Let's go!
                  </button>
                </form>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form action="" className="flip-card__form">
                  <input
                    type="name"
                    placeholder="Name"
                    className="flip-card__input"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="flip-card__input"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="flip-card__input"
                  />
                  <button
                    className="flip-card__btn"
                    onClick={handleNavigation}
                  >
                    Confirm!
                  </button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
    </main>
  );
}

export default Login;