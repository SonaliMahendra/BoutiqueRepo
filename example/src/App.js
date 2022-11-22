import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import EventBus from "./common/EventBus";
import Kids from "./components/Kids";
import Women from "./components/Women";
import Men from "./components/Men";

import Jewellery from "./components/Jewellery";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/ContactUs/Contact";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          BOUTIQUE
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/Home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/BoarddModerator"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/BoardAdmin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/BoardUser"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/Profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
          {showAdminBoard && <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Admin Pannel
            </Link>
          </li>}
            <li className="nav-item">
              <Link to={"/Women"} className="nav-link">
              Women
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Men"} className="nav-link">
              Men
              </Link>
              </li>
            <li className="nav-item">
              <Link to={"/Kids"} className="nav-link">
              Kids
              </Link>
            </li>
           
            <li className="nav-item">
              <Link to={"/Jewellery"} className="nav-link">
              Jewellery
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Cart"} className="nav-link">
              Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Checkout"} className="nav-link">
              Checkout
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Contact"} className="nav-link">
              ContactUs
              </Link>
            </li>
            <li className="nav-item">
              <a href="/Login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
           
            
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/Login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/Register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/BoardUser" element={<BoardUser/>} />
          <Route path="/BoardModerator" element={<BoardModerator/>} />
          <Route path="/BoardAdmin" element={<BoardAdmin/>} />
          <Route path="/Women" element={<Women/>} />
          <Route path="/Men" element={<Men/>} />
          <Route path="/Kids" element={<Kids/>} />
          <Route path="/Jewellery" element={<Jewellery/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Contact" element={<Contact/>} />

        </Routes>
      </div>

    </div>
  );
};

export default App;
