import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../../public/brand.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row foot">
          <div className="col-md-2 mb-4 d-flex flex-column align-items-center">
            <Link to="/">
              <img
                src={Logo}
                alt="Shri IG Decoration Logo"
                style={{ maxHeight: "100px", marginBottom: "10px" }}
              />
            </Link>
            <h5 className="footer-heading fw-bold mb-0 text-center">
              Shri IG Decoration
            </h5>
          </div>

          {/* About Us Section */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-heading fw-bold mb-3">About Us</h6>
            <p className="text-light">
              Making your events unforgettable with creative balloon decorations
              and backdrops.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-heading fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-light text-decoration-none">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-light text-decoration-none"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-heading fw-bold mb-3 gap-1">Contact Us</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.google.com/maps/place/Shri+aaiji+decoration+%26+event+planner/@22.0357504,75.1711609,14z/data=!4m15!1m8!3m7!1s0x39620ed2d52fa0bb:0xbeae9a321eb607af!2sUchawad,+Madhya+Pradesh!3b1!8m2!3d22.0412529!4d75.2070644!16s%2Fg%2F12hv47s3y!3m5!1s0x39620ff3a6c2d857:0x61de541dbde76ee8!8m2!3d22.0412529!4d75.2070644!16s%2Fg%2F11srd2cf5g?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <FaMapMarkerAlt className="me-2" />
                  Uchawad,Anjad, Barwani, MP
                </a>
              </li>

              <li>
                <a
                  href="tel:+917067961247"
                  className="text-white text-decoration-none"
                >
                  <FaPhoneAlt className="me-2" />
                  +91 7067961247
                </a>
              </li>

               <li>
                <a
                  href="tel:+917247643764"
                  className="text-white text-decoration-none"
                >
                  <FaPhoneAlt className="me-2" />
                  +91 7247643764
                </a>
              </li>

              <li className="d-inline-flex align-items-center">
                <FaEnvelope className="me-2" />
                <a
                  href="mailto:shriaaijidecoration@gmail.com"
                  className="text-white text-decoration-none"
                >
                  <span>shriaaijidecoration@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-heading fw-bold mb-3">Connect With Us</h6>
            <div className="d-flex gap-3 fs-4">
              <a
                href="https://www.facebook.com/profile.php?id=100094396052436"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>

              <a
                href="https://instagram.com/shri_aaiji_decoration"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/917067961247"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.youtube.com/@shriaaijidecorationeventme8857"
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="mb-0 small text-light">
            &copy; {new Date().getFullYear()} Shri IG Decoration. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
