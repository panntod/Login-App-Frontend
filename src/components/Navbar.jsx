import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isBurgerActive, setBurgerActive] = useState(false);

  const toggleBurger = () => {
    setBurgerActive(!isBurgerActive);
  };

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img src={logo} width="30" height="30" className="ml-3" alt="logo" />
            {user && <h2 className="title is-4 ml-3">{user.name}</h2>}
          </NavLink>

           {/* eslint-disable-next-line */}
          <a
            role="button"
            className={`navbar-burger burger${isBurgerActive ? " is-active" : ""}`}
            aria-label="menu"
            aria-expanded={isBurgerActive}
            data-target="navbarBasicExample"
            onClick={toggleBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu${isBurgerActive ? " is-active" : ""}`}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
