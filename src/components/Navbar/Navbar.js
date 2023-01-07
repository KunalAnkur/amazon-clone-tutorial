import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  DownCircleOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {connect} from "react-redux"
function Navbar({ numberOfProduct }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="middle_nav_container">
        <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
          <div
            className={`category btn ${
              location.pathname === "/" && "selected"
            }`}
          >
            <HomeOutlined />
            <span>Home</span>
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"/product"}
        >
          <div
            className={`category btn ${
              location.pathname === "/product/1" && "selected"
            }`}
          >
            <QuestionCircleOutlined />
            <span>Products</span>
          </div>
        </Link>
        <div className="category btn">
          <DownCircleOutlined />
          <span>Categories</span>
        </div>
      </div>
      <Link style={{ textDecoration: "none", color: "white" }} to={"/cart"}>
        <div className="left_nav_container">
          <ShoppingCartOutlined style={{ fontSize: "26px" }} />
          {numberOfProduct !== 0 && <span className="badge">{numberOfProduct}</span> }
        </div>
      </Link>
    </nav>
  );
}

const stateToProps = (state) => {
  return {
    numberOfProduct: state.cart.numberOfProduct,
  };
}

export default connect(stateToProps)(Navbar);
