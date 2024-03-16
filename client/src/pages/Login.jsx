import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        }
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    }
    );
  }
  
  const signup = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      navigate("/home");
    }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
  
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
                <div className="title">Fashion helper</div>
                <form action="" className="flip-card__form">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="flip-card__input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="flip-card__input"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="flip-card__btn"
                    onClick={handleLogin}
                  >
                    Let's go!
                  </button>
                </form>
              </div>
              <div className="flip-card__back">
                <div className="title">Fashion helper</div>
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="flip-card__input"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="flip-card__btn"
                    onClick={signup}
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