import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isInstitutionsDropdownOpen, setInstitutionsDropdownOpen] =
    useState(false);

  const toggleDropdown = () => {
    setInstitutionsDropdownOpen((prevState) => !prevState);
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]); // Dependency on location ensures it runs whenever the route changes

  return (
    <div>
      <nav className="navbar navbar-expand-lg desktop-navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="/images/logomymanas 1.png" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse d-flex justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Education
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/our-scope">
                      Our Scope
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/scholarships">
                      Scholarships
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item dropdown institute-dropdown ${
                      isInstitutionsDropdownOpen ? "show" : ""
                    }`}
                    onMouseEnter={() => setInstitutionsDropdownOpen(true)}
                    onMouseLeave={() => setInstitutionsDropdownOpen(false)}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="/institutions"
                      role="button"
                      aria-expanded={isInstitutionsDropdownOpen}
                    >
                      Institutions
                    </NavLink>
                    <ul
                      className={`dropdown-menu1 ${
                        isInstitutionsDropdownOpen ? "show" : ""
                      }`}
                    >
                      <li>
                        <NavLink className="dropdown-item" to="/academy">
                          Manas Academy
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/vidhya-vanam">
                          Vidhya Vanam
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link d-none" to="/news">
                  News
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
              <button className="custom-btn">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/donate">
                    Donate
                  </NavLink>
                </li>
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar fixed-top mobile-navbar">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/"
            data-aos="fade-right" // Fade in as you scroll
            data-aos-duration="1500"
            title="logo"
          >
            <img src="/images/logomymanas 1.png" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-aos="fade-left" // Fade in as you scroll
            data-aos-duration="1500"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <NavLink
                className="navbar-brand"
                to="/"
                data-aos="fade-left" // Fade in as you scroll
                data-aos-duration="1500"
                title="logo"
              >
                <img src="/images/logomymanas 1.png" alt="logo" />
              </NavLink>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/about-us"
                  >
                    About Us
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="nav-link accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#education"
                          aria-expanded="true"
                          aria-controls="education"
                        >
                          Education
                        </button>
                      </h2>
                      <div
                        id="education"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li className="nav-item">
                              <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/our-scope"
                              >
                                Our Scope
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/scholarships"
                              >
                                Scholarships
                              </NavLink>
                            </li>
                            {/* <div className="accordion" id="instituteAccordion"> */}
                            {/* <div className="accordion-item"> */}
                            <li
                            // className="accordion-header"
                            // id="headingOne" className="nav-item"
                            >
                              <NavLink
                                to="/institution"
                                // className="accordion-button nav-link collapsed" // Add "collapsed" class
                                className="nav-links"
                                // type="button"
                                // data-bs-toggle="collapse"
                                // data-bs-target="#institutes"
                                // aria-expanded="false" // Set to false
                                // aria-controls="institutes"
                              >
                                Institutions
                              </NavLink>
                            </li>
                            {/* <div
                                  id="institutes"
                                  className="accordion-collapse collapse" // Keep only "collapse", remove "show"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#instituteAccordion"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li>
                                        <NavLink
                                          className="dropdown-item"
                                          to="/institution"
                                        >
                                          Institution 1
                                        </NavLink>
                                      </li>
                                      <li>
                                        <NavLink
                                          className="dropdown-item"
                                          to="/"
                                        >
                                          Institution 2
                                        </NavLink>
                                      </li>
                                    </ul>
                                  </div>
                                </div> */}
                            {/* </div>
                            </div> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link d-none" to="/news">
                    News
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact-us">
                    Contact Us
                  </NavLink>
                </li>

                <button className="custom-btn">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/donate">
                      Donate
                    </NavLink>
                  </li>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
