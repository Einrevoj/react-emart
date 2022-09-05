import React from "react";
import { specials } from "../utilities/enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Specials() {
  const renderSpecials = () => {
    return specials.map((item) => (
      <div class="col-md-6 col-lg-4 col-xl-3 p-2" key={item.id}>
        <div class="special-img position-relative overflow-hidden">
          <img src={item.image} alt={item.name} class="w-100" />
          <span class="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
        <div class="text-center">
          <p class="text-capitalize mt-3 mb-1">{item.name}</p>
          <span class="fw-bold d-block">{item.price}</span>
          <button class="btn btn-primary mt-3">Add to Cart</button>
        </div>
      </div>
    ));
  };
  return (
    <section id="special" className="py-5">
      <div className="container">
        <div className="title text-center py-5">
          <h2 className="position-relative d-inline-block">
            Special Selection
          </h2>
        </div>

        <div className="row">{renderSpecials()}</div>
      </div>
    </section>
  );
}
