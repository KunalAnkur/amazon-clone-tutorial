import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className="navbar">
      <Link style={{ textDecoration: "none", color:"white" }} to={"/"}>
        <div className="category btn">Home</div>
      </Link>
      <Link style={{ textDecoration: "none", color: "white" }} to={"/product"}>
        <div className="category btn">Products</div>
      </Link>
      <div className="category btn">Categories</div>
    </nav>
  );
}

export default Navbar