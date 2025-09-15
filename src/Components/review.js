import React from 'react';
import "../App.css";

const Review = () => {
  React.useEffect(() => {
  
    const loadSwiper = async () => {
    
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
      script.onload = () => {
        // Initialize Swiper after the script loads
        const swiper = new window.Swiper(".review-slider-swiper", {
          centeredSlides: false,
          slidesPerView: 1,
          spaceBetween: 12,
          breakpoints: {
             320: {
              slidesPerView: 1.1,
              spaceBetween: 14
            },
            439: {
              slidesPerView: 1.5,
              spaceBetween: 14
            },
            769: {
              slidesPerView: 2.5,
              spaceBetween: 16
            },
            1025: {
              slidesPerView: 2.5,
              spaceBetween: 18
            }
          },
          pagination: {
            el: ".review-slider-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".review-slider-arrow-box .swiper-button-next",
            prevEl: ".review-slider-arrow-box .swiper-button-prev"
          }
        });
      };
      document.body.appendChild(script);
    };

    loadSwiper();

  
    return () => {
    
      const existingLink = document.querySelector('link[href*="swiper"]');
      const existingScript = document.querySelector('script[src*="swiper"]');
      if (existingLink) existingLink.remove();
      if (existingScript) existingScript.remove();
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "David Lee",
      position: "Creative Director",
      avatar: "DL",
      text: "Perfect in every way! From start to finish, everything exceeded my expectations. Will definitely return and recommend to others."
    },
    {
      id: 2,
      name: "Annisa Friya", 
      position: "Functionality Agent",
      avatar: "AF",
      text: "As expected, the food was delicious and the team was so friendly and helpful – we loved them! It was a delightful experience all round."
    },
    {
      id: 3,
      name: "John Doe",
      position: "Solutions Director", 
      avatar: "JD",
      text: "I have to say it's the best meal I have had in quite some time. You will definitely be seeing more of me!"
    },
    {
      id: 4,
      name: "Sarah Miller",
      position: "Marketing Manager",
      avatar: "SM", 
      text: "Exceptional service and outstanding quality. Every detail was carefully considered and executed flawlessly."
    },
    {
      id: 5,
      name: "Robert Taylor",
      position: "Product Manager",
      avatar: "RT",
      text: "An absolutely wonderful experience from beginning to end. The attention to detail and customer care was remarkable."
    }
  ];

  return (
    <div className="review-main">
      <div className="review-slider-heading">What Our Customers Say</div>
      
      <div className="swiper review-slider-swiper mySwiper">
        <div className="swiper-wrapper">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="swiper-slide review-slider-slide">
              <div className="review-slider-card">
                <div className="review-slider-stars">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="review-slider-star">★</span>
                  ))}
                </div>
                <div className="review-slider-text">"{testimonial.text}"</div>
                <div className="review-slider-info">
                  <div className="review-slider-avatar">{testimonial.avatar}</div>
                  <div className="review-slider-details">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="review-slider-navigation">
          <div className="review-slider-pagination swiper-pagination"></div>
          <div className="review-slider-arrow-box">
            <div className="swiper-button-prev" aria-label="Previous"></div>
            <div className="swiper-button-next" aria-label="Next"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
