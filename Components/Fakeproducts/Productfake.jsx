import React, { useEffect, useState } from "react";

export default function Productfake() {
  const [products, setproducts] = useState([]);
  const Fetchingdata = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    setproducts(data);
  };

  useEffect(() => {
    Fetchingdata();
  }, []);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)",width:"100vw",cursor:"pointer"}}>
     
      {products.map((product) => (
        <div key={product.id}>
          
          <img src={product.images} style={{width:"380px",height:"380px"}}></img>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          
        </div>
      ))}
    </div>
  );
}
