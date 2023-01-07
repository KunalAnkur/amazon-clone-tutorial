import React from 'react'
import {connect} from "react-redux";
import { Link } from "react-router-dom"
import "./styles/CartPage.css";
import {removeProductFromCart} from "../redux/actions/cartAction"
function CartPage({ products, removeProductFromCart }) {
  const onDelete = (id) => {
    removeProductFromCart(id);
  };
  return (
    <div className="cart">
      {products.map(({ id, title, description, imgUrl, rating, price }) => (
        <div key={id} className="cart-container">
          <img className="product_img" src={imgUrl} alt={title} />
          <div className="detail_container">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/product/${id}`}
            >
              <h3 className="title">{title}</h3>
            </Link>
            <p className="description">{description}</p>
            <h3 className="price">$ {price}</h3>
            <div className="rating">
              <span>{rating}</span> / 5
            </div>
          </div>
          <button onClick={() => onDelete(id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    products: state.cart.products
  }
}
export default connect(mapStateToProps, {removeProductFromCart})(CartPage);