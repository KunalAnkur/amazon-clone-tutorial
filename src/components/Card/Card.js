import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Card({ id,title, imgUrl, price, rating, description }) {
  return (
    <div className="card">
      <img className="product_img" src={imgUrl} alt={title} />
      <div className="detail_container">
        <Link style={{textDecoration: "none", color: "black"}} to={`/product/${id}`}>
          <h3 className="title">{title}</h3>
        </Link>
        <p className="description">{description}</p>
        <h3 className="price">$ {price}</h3>
        <div className="rating">
          <span>{rating}</span> / 5
        </div>
      </div>
    </div>
  );
}

export default Card;
