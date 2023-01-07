import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {connect} from "react-redux";
import {sendProductToCart} from "../../redux/actions/cartAction"
function Card({ id,title, imgUrl, price, rating, description, sendProductToCart }) {
  
  function onStoringCart() {
    const data = {
      id, title, imgUrl, price, rating,description
    }
    sendProductToCart(data);
  }
  
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
      <button onClick={onStoringCart}><ShoppingCartOutlined /> Add to cart</button>
    </div>
  );
}

export default connect(null, { sendProductToCart })(Card);
