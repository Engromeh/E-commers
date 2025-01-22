import { useEffect, useState } from "react";
import Cardsst from "../CardStyle/Cardsst";
import { Button } from "react-bootstrap";

const CardProducte = () => {
  const [proudcetes, setproudcetes] = useState([]);
  const [category, setcategory] = useState([]);

  const getproudect = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setproudcetes(data));
  };

  const getcategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setcategory(data));
  };

  const filtercategory = (catename) => {
    console.log(catename);
    fetch(`https://fakestoreapi.com/products/category/${catename}`)
      .then((response) => response.json())
      .then((data) => 
        //SET PROUDUCTE IMP 
        setproudcetes(data));
  };
  useEffect(() => {
    getproudect();
    getcategory();
  }, []);

  return (
    <>
     <Button onClick={()=>{ getproudect()}}>ALL</Button>
      {category.map((cate) => {
        return (
          <>
          <Button
            key={cate}
            onClick={() => {
              filtercategory(cate);
            }}
          >
            {cate}
          </Button>
         
          </>
        );
      })}
      <h2 className="text-center p-3">Our productes</h2>
      <div className="container">
        <div className="row">
          {proudcetes.map((proudcet) => {
            return (
              <div className="col-3" key={proudcet.id}>
                <Cardsst proudcet={proudcet} ShowButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardProducte;
