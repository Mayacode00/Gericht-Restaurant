import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/about">about</Link>
        </li>
        <li className="p__opensans">
          <Link to="/services">services</Link>
        </li>
        <li className="p__opensans">
          <Link to="/chefs">Chefs</Link>
        </li>
        <li className="p__opensans">
          <Link to="/contact">contact</Link>
        </li>
        <li className="p__opensans">
          <Link to="/faq">faq</Link>
        </li>
      </ul>

      <div className="app__navbar-login">
        <Link to="/login" className="p__opensans app__navbar-reg">
          Log In / Register
        </Link>
        <div />
        <Link to="/" className="p__opensans app__navbar-reg">
          Book Table
        </Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#ffffff"
          onClick={() => setToggleMenu(true)}
          fontSize={27}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <Link onClick={() => setToggleMenu(false)} to="/">
                  Home
                </Link>
              </li>
              <li className="p__opensans">
                <Link onClick={() => setToggleMenu(false)} to="/about">
                  About
                </Link>
              </li>
              <li className="p__opensans">
                <Link onClick={() => setToggleMenu(false)} to="/services">
                  Menu
                </Link>
              </li>
              <li className="p__opensans">
                <Link onClick={() => setToggleMenu(false)} to="/chefs">
                  Chefs
                </Link>
              </li>
              <li className="p__opensans">
                <Link onClick={() => setToggleMenu(false)} to="/contact">
                  Contact
                </Link>
              </li>
              <li className="p__opensans">
                <Link onClick={() => setToggleMenu(false)} to="/faq">
                  faq
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
