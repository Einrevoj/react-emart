import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero">
      <Carousel className="container h-100 d-flex align-items-center">
        <Carousel.Item className="text-center">
          <h2 className="text-danger">Best Collection</h2>
          <h1 className="py-2 fw-bold text-danger">NEW ARRIVALS</h1>
          <Link to="/products" className="btn">
            shop now
          </Link>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <h2 className="text-danger">Best Price & Offer</h2>
          <h1 className="py-2 fw-bold text-danger">NEW SEASON</h1>
          <Link to="/products" className="btn">
            BUY NOW
          </Link>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <h2 className="text-danger">Best time to Buy</h2>
          <h1 className="py-2 fw-bold text-danger">SUMMER SALE</h1>
          <Link to="/products" className="btn">
            GET IT NOW
          </Link>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
