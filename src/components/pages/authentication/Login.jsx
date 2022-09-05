import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

export default function Login() {
  const [darkMode, setDarkMode] = useState("");

  return (
    <div className="auth">
      <div class={`page-content${darkMode} d-flex align-items-center`}>
        <div class="container d-flex justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <div className={`auth-card${darkMode}`}>
              <div class="p-3 mt-3 d-flex justify-content-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs055yivZN4dfPP9jh9UmjZIx18bysfdrmRZ8vC2ebaON8ddVtMG_QiaSNwC8sooS-Ar4&usqp=CAU"
                  alt="Site Icon"
                  style={{ height: "50px" }}
                />
                <span id="brand-name" class="fw-bold fs-4 pt-3">
                  ULTRA
                </span>
              </div>
              <h5 class="text-center fst-italic">Shopping-Style-Fashion</h5>
              <button className={`btn mt-5 mb-3 service-btn${darkMode}`}>
                <FontAwesomeIcon icon={faFacebook} />
                <span> Login with Facebook</span>
              </button>
              <button className={`btn mb-3 service-btn${darkMode}`}>
                <FontAwesomeIcon icon={faGoogle} />
                <span> Login with Google</span>
              </button>
              <hr />

              <form>
                <div class="mb-2 mt-5">
                  <input
                    type="email"
                    className={`form-control auth-input${darkMode}`}
                    placeholder="Email Address"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    className={`form-control auth-input${darkMode}`}
                    placeholder="Password"
                  />
                </div>
                <button
                  class="btn auth-btn mt-2 mb-4 bg-secondary w-100 text-white"
                  type="submit"
                >
                  Login
                </button>
              </form>

              <p class="text-center mb-1">
                <a href="index.html" class="text-muted">
                  Forgot Password?
                </a>
              </p>
              <p class="text-center mb-4">
                Don't have an account?
                <a href="signup.html" class="text-muted">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        id="theme-button"
        className={`btn btn-theme${darkMode}`}
        onClick={() => setDarkMode(darkMode ? "" : "-dark")}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </div>
  );
}
