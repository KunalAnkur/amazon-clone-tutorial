import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/HomePage.css";
import Card from "../components/Card/Card";
import Skeleton from "../components/Skeleton/Skeleton";
import { BounceLoader } from "react-spinners";
function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="home">
      <div className="product_list">
        {!loading ? products.map((product) => (
          <Card
            key={product.id}
            description={product.description}
            imgUrl={product.image}
            price={product.price}
            rating={product.rating.rate}
            title={product.title}
            id={product.id}
          />
        )) : <Skeleton />}
      </div>
    </div>
  );
}

export default HomePage;
