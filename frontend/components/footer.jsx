import React from 'react';

const Header = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <h2 className="footer-heading">
          <a href="http://www.appacademy.io/#p-home">
            Learn about App Academy
          </a>
        </h2>
        <div className="footer-col-wrapper">
          <div className="footer-col  footer-col-1">
            <p className="text">
              Please contact us with any questions or concerns:
            </p>
            <ul className="contact-list">
              <li>
                <a href="mailto:contact@appacademy.io">
                  contact@appacademy.io
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col  footer-col-3">
            <p className="text">
              Use these resources to prepare for App Academy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Header;
