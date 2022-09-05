import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarked,
  faPhone,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-3">
            <Link className="text-decoration-none brand text-white" to="/">
              ULTRA
            </Link>
            <p className="text-white text-muted mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit
              dolor ipsam?
            </p>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light">Links</h5>
            <ul className="list-unstyled">
              <li className="my-3">
                <Link
                  to="/"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} /> Home
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/products"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} /> Products
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/about-us"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} /> About Us
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/contact"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Contact Us</h5>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faMapMarked} />
              </span>
              <span className="fw-light">
                Novaliches, Quezon City, Philippines
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="fw-light">ultra.support@gmail.com</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="fw-light">+9786 6776 236</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Follow Us</h5>
            <div>
              <ul className="list-unstyled d-flex">
                <li>
                  <Link
                    to="/"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <FontAwesomeIcon icon={faPinterest} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
