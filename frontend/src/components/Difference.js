import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Difference = ({ masterdonate }) => {
  const location = useLocation();
  const isLocationDonate = location.pathname === "/donate";

  return (
    <section className='difference-section'>
      <div className='container'>
        <div className='support-text-div' data-aos='fade-left'>
          <h2 className='extra-big-text'>{masterdonate?.title}</h2>

          {/* <img
            src="/images/icons/dharma-white-logo (2) 1.png"
            alt="logo"
            className="donate-img"
          /> */}
          <div className='donate-para'>
            <button className='custom-btn bridge-btn'>
              {isLocationDonate ? (
                <NavLink
                  className='nav-link'
                   to={masterdonate?.buttonLink}
                  // to='https://drive.google.com/file/d/1zE1gMfmD9eW41l9FbM1nV9clhYh2IZJz/view?usp=drive_link'
                  target='_blank'
                >
 {masterdonate?.buttonText}                </NavLink>
              ) : (
                <NavLink
                  className='nav-link'
                  to={masterdonate?.buttonLink}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {masterdonate?.buttonText}
                </NavLink>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
