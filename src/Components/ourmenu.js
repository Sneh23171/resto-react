import React, { useEffect, useMemo, useRef, useState } from "react";
import "../App.css";

export default function Ourmenu() {

  const xsmTrackRef = useRef(null);
  const xsmFirstCardRef = useRef(null);
  const [xsmIndex, setXsmIndex] = useState(0);
  const [xsmPerView, setXsmPerView] = useState(1);


  const xsmItems = useMemo(
    () => [
      { title: "Black Pepper Crab", rating: "★★★★☆", desc: "Crab served with pepper in Singaporean style.", price: "$4.25" },
      { title: "Summer Fruit Salad", rating: "★★★★★", desc: "Perfect fruit salad for summer picnics or BBQs.", price: "$3.15" },
      { title: "Chicken Ramen", rating: "★★★★☆", desc: "Traditional ramen served hot in under an hour.", price: "$2.80" },
      { title: "Paneer Tikka", rating: "★★★★★", desc: "Indian-style grilled cottage cheese cubes.", price: "$3.95" },
      { title: "Sushi Bento", rating: "★★★☆☆", desc: "Assorted sushi packed in a delicious bento box.", price: "$6.10" },
      { title: "Fried Rice", rating: "★★★★☆", desc: "Wok-fried rice with vegetables and eggs.", price: "$3.40" },
    ],
    []
  );

  // === Helpers ===
  const xsmCalcPerView = () => {
    const w = window.innerWidth;
    return w >= 1024 ? 3 : w >= 768 ? 2 : 1;
  };

  const xsmMaxIndex = Math.max(0, xsmItems.length - xsmPerView);


  useEffect(() => {
    setXsmIndex((i) => Math.min(Math.max(0, i), xsmMaxIndex));
  }, [xsmPerView, xsmMaxIndex]);

  // Handle resize responsively
  useEffect(() => {
    const onResize = () => setXsmPerView(xsmCalcPerView());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);


  useEffect(() => {
    if (!xsmTrackRef.current || !xsmFirstCardRef.current) return;
    const gap = 24; // must match gap in CSS (1.5rem ~ 24px)
    const cardWidth = xsmFirstCardRef.current.offsetWidth + gap;
    const x = -(xsmIndex * cardWidth);
    xsmTrackRef.current.style.transform = `translateX(${x}px)`;
  }, [xsmIndex, xsmPerView]);

  const xsmGoPrev = () => setXsmIndex((i) => Math.max(0, i - 1));
  const xsmGoNext = () => setXsmIndex((i) => Math.min(xsmMaxIndex, i + 1));

  const xsmShowDots = typeof window !== "undefined" ? window.innerWidth < 1024 : true;
  const xsmDotsCount = Math.max(1, xsmItems.length - xsmPerView + 1);

  return (
    <div className="xsm-app">
      <div className="xsm-wrapper">
        <h1 className="xsm-title-main">Our Special Menu</h1>

        <div className="xsm-header">
          <div className="xsm-cat-list">
            <button className="xsm-cat-pill xsm-active">All Categories</button>
            <button className="xsm-cat-pill">Breakfast</button>
            <button className="xsm-cat-pill">Brunch</button>
            <button className="xsm-cat-pill">Lunch</button>
            <button className="xsm-cat-pill">Dinner</button>
            <button className="xsm-cat-pill">Dessert</button>
            <button className="xsm-cat-pill">Beverages</button>
            <button className="xsm-cat-pill">Appetizers</button>
          </div>

          <a href="#" className="xsm-view-link" aria-label="View full menu">
            View all menu
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="m9.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z" />
            </svg>
          </a>
        </div>
      </div>

      <section className="xsm-section">
        <div className="xsm-slider" role="region" aria-label="Special menu slider">
          <div
            className="xsm-track"
            ref={xsmTrackRef}
            style={{ transform: "translateX(0)" }}
          >
            {xsmItems.map((it, idx) => (
              <div className="xsm-card" key={it.title} ref={idx === 0 ? xsmFirstCardRef : undefined}>
                <div className="xsm-image-circle" />
                <div className="xsm-card-body">
                  <h3 className="xsm-title">{it.title}</h3>
                  <div className="xsm-rating" aria-label={`Rating ${it.rating}`}>{it.rating}</div>
                  <p className="xsm-description">{it.desc}</p>
                  <hr className="xms-hr" />
                  <div className="xsm-price-row">
                    <span className="xsm-price">{it.price}</span>
                    <button className="xsm-add" type="button">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="xsm-controls" aria-hidden={xsmPerView >= 3}>
          <div className="xsm-nav">
            <button className={"xsm-btn" + (xsmIndex === 0 ? " xsm-disabled" : "")} onClick={xsmGoPrev} aria-label="Previous" disabled={xsmIndex === 0}>
              ‹
            </button>
            <button className={"xsm-btn" + (xsmIndex === xsmMaxIndex ? " xsm-disabled" : "")} onClick={xsmGoNext} aria-label="Next" disabled={xsmIndex === xsmMaxIndex}>
              ›
            </button>
          </div>

          {xsmShowDots && (
            <div className="xsm-dots" role="tablist" aria-label="Slide indicators">
              {Array.from({ length: xsmDotsCount }).map((_, i) => (
                <button
                  key={i}
                  className={"xsm-ind" + (i === xsmIndex ? " xsm-active" : "")}
                  onClick={() => setXsmIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-selected={i === xsmIndex}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
