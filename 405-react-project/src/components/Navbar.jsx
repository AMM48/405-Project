import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCart4 } from "react-icons/bs";
// import { faCartShopping } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
//is this working
function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = React.useState({
    state: localStorage.getItem("isLoggedIn") === "true" || false,
  });

  function handleLogout() {
    setIsLoggedIn({
      state: false,
    });
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    navigate("/");
  }
  return (
    <div className="navbar">
      <a className="logo" href="/">
        <FontAwesomeIcon
          icon={faCartShopping}
          size="2xl"
          style={{ color: "#005aff" }}
          className="logo-img"
        />
        <span className="logo-text">Agorá</span>
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Menu">Menu</a>
          </li>
          <li>
            <a href="/#about-us">About Us</a>
          </li>
          <li>
            <a id="contact-us-nav" href="/#contact-us">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
      <div className="diamond-shape">
        <a href="/Cart" className="nav-cart">
          <BsCart4 />
        </a>
      </div>
      {isLoggedIn.state ? (
        <a className="btn" href="/" onClick={handleLogout}>
          Sign out
        </a>
      ) : (
        <a className="btn" href="/login">
          Sign in
        </a>
      )}
    </div>
  );
}

export default Navbar;
