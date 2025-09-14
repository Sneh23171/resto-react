import "../App.css";
import React, {  useState } from "react";

export default function Heropage() {



     return (
        <>
  <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">
          Provide the best <br />
          food for you
        </h1>

        <p className="hero-text">
          We provide the most delicious food based on high quality ingredients
          that are maintained by high tech machines and cooked by our experts
        </p>

        <div className="search-bar">
          <svg
            className="search-bar-icon"
            fill="none"
            stroke="#999"
            viewBox="0 0 24 24"
            style={{ marginLeft: 20 }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>

          <input
            type="text"
            className="search-bar-input"
            placeholder="What food would you like to eat?"
          />

          <button className="search-bar-btn">
            <span className="search-btn-text">Search</span>
            <svg
              className="search-btn-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="hero-graphic">
        <div className="hero-circle"></div>
      </div>
    </div>

    
 <section className="order-process">
      <h2 className="order-heading">How To Order</h2>
      <p className="order-intro">
        Follow each of these easy steps to order the menu you want, wait and we are ready to do it for you to be
        ready to enjoy.
      </p>

      <div className="order-steps">
        {/* Step 1 */}
        <div className="order-step">
          <div className="order-step-card">
            <svg
              className="order-step-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m20,3H4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h1v2h2v-2h10v2h2v-2h1c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM4,17V5h16v12s-16,0-16,0Z"></path>
              <path d="m6,15h8V7H6v8Zm2-6h4v4h-4v-4Z"></path>
              <path d="M17 8A1 1 0 1 0 17 10 1 1 0 1 0 17 8z"></path>
              <path d="M17 12A1 1 0 1 0 17 14 1 1 0 1 0 17 12z"></path>
            </svg>
            <h3 className="order-step-title">Choose Menu</h3>
            <p className="order-step-text">
              Select the food or drink menu you want, please enter it into your shopping cart
            </p>
          </div>
        </div>

        <div className="order-arrow">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Step 2 */}
        <div className="order-step">
          <div className="order-step-card">
            <svg className="order-step-icon" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0">
              <path d="m20,3H4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h1v2h2v-2h10v2h2v-2h1c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM4,17V5h16v12s-16,0-16,0Z" />
              <path d="m6,15h8V7H6v8Zm2-6h4v4h-4v-4Z" />
              <circle cx="17" cy="8" r="1" />
              <circle cx="17" cy="12" r="1" />
            </svg>
            <h3 className="order-step-title">Checkout Order</h3>
            <p className="order-step-text">
              Orders that are in your shopping cart now just do checkout, to be ready for processing
            </p>
          </div>
        </div>

        <div className="order-arrow">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Step 3 */}
        <div className="order-step">
          <div className="order-step-card">
            <svg className="order-step-icon" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0">
              <path d="m20,3H4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h1v2h2v-2h10v2h2v-2h1c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM4,17V5h16v12s-16,0-16,0Z" />
              <path d="m6,15h8V7H6v8Zm2-6h4v4h-4v-4Z" />
              <circle cx="17" cy="8" r="1" />
              <circle cx="17" cy="12" r="1" />
            </svg>
            <h3 className="order-step-title">Wait for Delivery</h3>
            <p className="order-step-text">
              So from here we are ready to prepare and deliver orders to your residence
            </p>
          </div>
        </div>
      </div>
    </section>


    {/* About Section */}


    <div className="about-container">
      <div className="about-image">
        <div className="about-hero-circle"></div>
      </div>

      <div className="about-content">
        <div className="about-eyebrow">About Us</div>

        <h1 className="about-heading">
          We Believe In Working <br/> With Accredited Chefs
        </h1>

        <p className="about-description">
          We are a restaurant that provides a variety of food and beverages of the highest quality through a
          process of manufacture by experts and a professional way by utilizing high technology and high quality
          food ingredients, and this is all prepared only for our customers.
        </p>

        <button className="about-cta">Learn more</button>
      </div>
</div>

</>


);
}