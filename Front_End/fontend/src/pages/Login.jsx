import React, { useState } from "react";
import "./Login.css";
import videoSRC from "../Assets/video.mp4";

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRightPanelActive(true);
  };

  const handleLoginClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div
      className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
      id="container"
    >
      <div className=" transition-all duration-100 z-1">
        {/* Form Register */}
        <div className="">
          <form action="#">
            <h1 className="title">Register</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
            <button className="btn-mobile" onClick={handleLoginClick}>
              Login
            </button>
            <span>or use your account?</span>
            <div className="social-container">
              <a href="#" className="social">
                <i id="facebook" className="lni lni-facebook-fill"></i>
              </a>
              <a href="#" className="social">
                <i id="google" className="lni lni-google"></i>
              </a>
              <a href="#" className="social">
                <i id="linkedin" className="lni lni-linkedin-original"></i>
              </a>
            </div>
          </form>
        </div>

        {/* Form Login */}
        <div className="form-container login-container">
          <form action="#">
            <h1 className="title">Login</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label>Remember me</label>
              </div>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
            <button>Login</button>
            <button className="btn-mobile" onClick={handleRegisterClick}>
              Register
            </button>
            <span>You don't have Account?</span>
            <div className="social-container">
              <a href="#" className="social">
                <i id="facebook" className="lni lni-facebook-fill"></i>
              </a>
              <a href="#" className="social">
                <i id="google" className="lni lni-google"></i>
              </a>
              <a href="#" className="social">
                <i id="linkedin" className="lni lni-linkedin-original"></i>
              </a>
            </div>
          </form>
        </div>

        {/* Video Background */}
        <div className="overlay-container">
          <div className="overlay">
            <video autoPlay muted loop className="background-video">
              <source src={videoSRC} type="video/mp4" />
              Trình duyệt không hỗ trợ video.
            </video>

            <div className="overlay-panel overlay-left">
              <h1 className="title">
                Hello <br /> friends
              </h1>
              <p>If you have an account, login here and have fun</p>
              <button className="ghost" id="login" onClick={handleLoginClick}>
                <i className="lni lni-arrow-right login"></i>
                Login
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1 className="title">
                Start your <br /> journey now
              </h1>
              <p>
                If you don't have an account yet, join us and start your journey
              </p>
              <button
                className="ghost"
                id="register"
                onClick={handleRegisterClick}
              >
                Register
                <i className="lni lni-arrow-left register"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
