import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import facebookIcon from "../../../assets/facebook.svg";
import twitterIcon from "../../../assets/Social.svg";
import instagramIcon from "../../../assets/instagram 1.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>KCB street, Meru, Kenya</p>
          <p>Phone: (254) 456-7890</p>
          <p>Email: info@transitease.com</p>
        </div>

        <div className="ft-nav-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Transitease. All rights reserved.
        </p>
        <p>
          Designed and built by{" "}
          <Link
            style={{ color: "white" }}
            to={"mailto:paulmurithi233@gmail.com"}
          >
            Paul Murithi.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
