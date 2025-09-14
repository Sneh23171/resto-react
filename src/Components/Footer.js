// Footer.jsx
import React, { useState } from "react";
import "../App.css";
import paperplane from "../Img/PaperPlaneRight.png";

const Footer = () => {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);

  const handleToggle = (section) => {
    if (typeof window !== "undefined" && window.innerWidth <= 480) {
      if (section === "categories") setIsCatOpen((v) => !v);
      if (section === "blogs") setIsBlogsOpen((v) => !v);
    }
  };

  return (
    <>
      <div className="resto-footer-main">
        <footer className="resto-footer-container">
          <div className="resto-footer-content">
            <div className="resto-footer-section">
              <h3 className="resto-footer-section-heading">RESTO</h3>
              <div className="resto-contact-info">
                <div>Jalan K.H. Wahid Hasyim No.70</div>
                <div>Menteng, Jakarta Pusat</div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <strong>(021) 8878 7652</strong>
                  </div>
                  <div>
                    <strong>resto@business.com</strong>
                  </div>
                </div>
              </div>

              <div className="resto-social-icons">
                <a href="#" className="resto-social-icon" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </a>
                <a href="#" className="resto-social-icon" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                    <path d="M23 4.5a9.4 9.4 0 0 1-2.7.8 4.7 4.7 0 0 0 2-2.6 9.5 9.5 0 0 1-3 1.1 4.7 4.7 0 0 0-8 4.3A13.3 13.3 0 0 1 3.1 3 4.7 4.7 0 0 0 4.5 9a4.7 4.7 0 0 1-2.1-.6v.1a4.7 4.7 0 0 0 3.7 4.6 4.7 4.7 0 0 1-2.1.1 4.7 4.7 0 0 0 4.4 3.3A9.4 9.4 0 0 1 2 19.5 13.3 13.3 0 0 0 9.3 22c8.4 0 13-7 13-13v-.6a9.2 9.2 0 0 0 2.3-2.4z" />
                  </svg>
                </a>
                <a href="#" className="resto-social-icon" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.3v-2.9h2.3V9.5c0-2.3 1.4-3.5 3.4-3.5.7 0 1.5.1 2.1.2v2.3h-1.2c-1 0-1.3.6-1.3 1.2v1.4h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12" />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className={`resto-footer-section resto-footer-section-categories ${isCatOpen ? "active" : ""}`}
              onClick={() => handleToggle("categories")}
            >
              <h3 className="resto-footer-section-heading">Categories</h3>
              <ul className="resto-footer-section-list">
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">Breakfast</a></li>
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">Brunch</a></li>
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">Lunch</a></li>
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">Dinner</a></li>
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">Desert</a></li>
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">Fast Food</a></li>
              </ul>
            </div>

            <div
              className={`resto-footer-section resto-footer-section-blogs ${isBlogsOpen ? "active" : ""}`}
              onClick={() => handleToggle("blogs")}
            >
              <h3 className="resto-footer-section-heading">Blogs</h3>
              <ul className="resto-footer-section-list">
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">How to Order</a></li>
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">All Menu</a></li>
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">What the Payment</a></li>
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">Can I Get Discount</a></li>
                <li className="resto-footer-section-list-item"><a href="#" className="resto-footer-section-link">How to be Membership</a></li>
              </ul>
            </div>

            <div className="resto-footer-section resto-newsletter">
              <h3 className="resto-footer-section-heading">Newsletter</h3>
              <div className="resto-newsletter-description">
                Get now free 20% discount for all products on your first order
              </div>
              <form
                className="resto-newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input type="email" placeholder="Enter your email" className="resto-newsletter-input" required />
                <button type="submit" className="resto-newsletter-button" aria-label="Subscribe">
                  <img src={paperplane}  alt="Send" />
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div>

      <div className="resto-social-icons-sec">
        <a href="#" className="resto-social-icon-sec" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1.5" />
          </svg>
        </a>
        <a href="#" className="resto-social-icon-sec" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
            <path d="M23 4.5a9.4 9.4 0 0 1-2.7.8 4.7 4.7 0 0 0 2-2.6 9.5 9.5 0 0 1-3 1.1 4.7 4.7 0 0 0-8 4.3A13.3 13.3 0 0 1 3.1 3 4.7 4.7 0 0 0 4.5 9a4.7 4.7 0 0 1-2.1-.6v.1a4.7 4.7 0 0 0 3.7 4.6 4.7 4.7 0 0 1-2.1.1 4.7 4.7 0 0 0 4.4 3.3A9.4 9.4 0 0 1 2 19.5 13.3 13.3 0 0 0 9.3 22c8.4 0 13-7 13-13v-.6a9.2 9.2 0 0 0 2.3-2.4z" />
          </svg>
        </a>
        <a href="#" className="resto-social-icon-sec" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
            <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.3v-2.9h2.3V9.5c0-2.3 1.4-3.5 3.4-3.5.7 0 1.5.1 2.1.2v2.3h-1.2c-1 0-1.3.6-1.3 1.2v1.4h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12" />
          </svg>
        </a>
      </div>

      <div className="resto-footer-bottom">
        <div className="resto-copyright">
          © 2021 Resto Inc. All Rights Reserved
        </div>
        <div className="resto-footer-links">
          <a href="#" className="resto-footer-link">Privacy Policy</a>
          <a href="#" className="resto-footer-link">Terms &amp; Conditions</a>
          <a href="#" className="resto-footer-link">Sitemap</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
