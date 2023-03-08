import React from "react";
import "./Footer.css";
import FooterOverlay from "../../components/Footer/FooterOverlay";
import Newsletter from "../../components/Footer/Newsletter";
import images from "../../constants/images";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">contact us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer-logo" />
          <p className="p__opensans-footer">
            "the best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: "50px" }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">working hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2021 gerícht. all rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
