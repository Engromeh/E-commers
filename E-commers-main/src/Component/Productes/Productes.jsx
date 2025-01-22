import { useEffect, useState } from "react";
import './Productes.css'
const Productes = () => {
  const [Proudectee, setProudectee]=useState([])
 
  useEffect(()=>{
    fetch ('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => setProudectee(data))
  },[]
   
  )
  const ProductList = Proudectee.map((pr) => {
    console.log(Proudectee);
   
    if (pr.price < 100) {
      return (
        <>
          <div className="item-card">
          <h2>{pr.name}</h2>
          <img src={pr.image} alt={pr.name} />
      
            <p>{pr.description}</p>
           <br />
      
            <span>{pr.price}</span>
          </div>
          
        </>
      );
    } else {
      return null;
    }
  });
  return (
    <div className="product-show">
      <div className="raw"> {ProductList}</div>
     
      
    </div>
  );
};

export default Productes;
