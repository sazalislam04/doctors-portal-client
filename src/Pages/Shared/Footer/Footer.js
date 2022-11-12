import React from "react";
import { Link } from "react-router-dom";
import whitening from "../../../assets/images/whitening.png";

const Footer = () => {
  return (
    <footer className="footer lg:grid-cols-4 p-10">
      <div>
        <img className="w-14 h-14" src={whitening} alt="" />
        <h2 className="text-2xl">The Doctors Portal</h2>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link to="/" className="link link-hover">
          Branding
        </Link>
        <Link to="/" className="link link-hover">
          Design
        </Link>
        <Link to="/" className="link link-hover">
          Marketing
        </Link>
        <Link to="/" className="link link-hover">
          Advertisement
        </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/" className="link link-hover">
          About us
        </Link>
        <Link to="/" className="link link-hover">
          Contact
        </Link>
        <Link to="/" className="link link-hover">
          Jobs
        </Link>
        <Link to="/" className="link link-hover">
          Press kit
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="/" className="link link-hover">
          Terms of use
        </Link>
        <Link to="/" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/" className="link link-hover">
          Cookie policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
