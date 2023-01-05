import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductPage() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(true);
        console.log(e);
      });
  }, []);
  return <div>
    {!loading ?
    <div>
    <img src={product.image}></img>
      <h1>{product.title}</h1>
     <h2>{product.description}</h2>
     <h2>$ {product.price}</h2>
     <h3>{product.rating.rate} / 5</h3>
    </div>
     
     : <h1>loading....</h1>}
  </div>;
}

export default ProductPage;
