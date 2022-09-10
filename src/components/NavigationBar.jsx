import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSignOut,
  faSignIn,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { auth } from "../Firebase";
import * as actionUser from "../redux/actions/actionUser";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

export default function NavigationBar() {
  const { logoutUser } = bindActionCreators(actionUser, useDispatch());
  const activeUser = useSelector((state) => state.activeUser);

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
    logoutUser();
  };

  return (
    <Navbar bg="light" expand="lg" className="bg-white py-4 fixed-top">
      <Container>
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-between order-lg-0"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs055yivZN4dfPP9jh9UmjZIx18bysfdrmRZ8vC2ebaON8ddVtMG_QiaSNwC8sooS-Ar4&usqp=CAU"
            alt="Site Icon"
          />
          <span id="brand-name">ULTRA</span>
        </NavLink>

        <div className="nav-btns order-lg-2">
          {activeUser.email ? (
            <>
              <NavLink
                to="/cart"
                className="btn position-relative"
                type="button"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="nav-btn-label"> CART </span>( 0 )
              </NavLink>
              <NavLink
                to="/login"
                className="btn position-relative"
                type="button"
                onClick={logout}
              >
                <FontAwesomeIcon icon={faSignOut} />
                <span className="nav-btn-label"> LOGOUT</span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn position-relative"
                type="button"
              >
                <FontAwesomeIcon icon={faSignIn} />
                <span className="nav-btn-label"> LOGIN</span>
              </NavLink>
              <NavLink
                to="/signup"
                className="btn position-relative"
                type="button"
              >
                <FontAwesomeIcon icon={faEdit} />
                <span className="nav-btn-label"> REGISTER</span>
              </NavLink>
            </>
          )}
        </div>

        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse className="order-lg-1">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-dark">
                HOME
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/products" className="nav-link text-dark">
                PRODUCTS
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/about-us" className="nav-link text-dark">
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/contact-us" className="nav-link text-dark">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
