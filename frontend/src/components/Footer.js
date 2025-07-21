import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-3 col-6">
            <NavLink className="navbar-brand" to="/">
              <img src="/images/logomymanas 2.png" alt="logo" />
            </NavLink>
          </div>
          <div className="col-lg-6 d-flex justify-content-end col-6">
            <div className="social-media">
              <NavLink
                className="navbar-item"
                to="https://www.facebook.com/share/19MZeCuWCt/?mibextid=wwXIfr"
                target="_blank"
              >
                <img
                  src="/images/icons/ic_baseline-facebook.png"
                  alt="social"
                />
              </NavLink>

              <NavLink
                className="navbar-item"
                to="https://www.instagram.com/mymanasfoundation?igsh=cmUxZzVoMTQzdnlp"
                target="_blank"
              >
                <img
                  src="/images/icons/ph_instagram-logo-fill.png"
                  alt="social"
                />
              </NavLink>

              <NavLink
                className="navbar-item"
                to="https://m.youtube.com/@manasacademy2020"
                target="_blank"
              >
                <i
                  class="fa-brands fa-youtube fs-5"
                  style={{ color: "#ffffff" }}
                ></i>
              </NavLink>

              <NavLink
                className="navbar-item"
                to="https://www.linkedin.com/company/my-manas-foundation"
                target="_blank"
              >
                <img
                  src="/images/icons/entypo-social_linkedin-with-circle.png"
                  alt="social"
                />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="row copyright-row">
          <p>
            © COPYRIGHT My Manas Foundation 2025. A 501(c)(3) Nonprofit
            Organization
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
