import { useEffect, useState } from "react";
import Cardsst from "../../ItemsHome/CardStyle/Cardsst";
import { Button } from "react-bootstrap";

const CardProducte = () => {
  const [proudcetes, setproudcetes] = useState([]);
  const [category, setcategory] = useState([]);

  const getproudect = () => {
    fetch("http://localhost:3000/porudect")
      .then((response) => response.json())
      .then((data) => setproudcetes(data));
  };

  const getcategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setcategory(data));
  };

  const filtercategory = (catename) => {
    fetch(`https://fakestoreapi.com/products/category/${catename}`)
      .then((response) => response.json())
      .then((data) => setproudcetes(data));
  };

  useEffect(() => {
    getproudect();
    getcategory();
  }, []);

  return (
    <>
      <div className="text-center  p-5" >
        <Button variant="outline-primary" onClick={() => getproudect()}>
          All
        </Button>
        {category.map((cate) => (
          <Button
            key={cate}
            variant="outline-secondary"
            onClick={() => filtercategory(cate)}
            className="mx-2"
          >
            {cate}
          </Button>
        ))}
      </div>
      <h2 className="text-center mb-3">Our Products</h2>
      <div className="container">
        <div className="row">
          {proudcetes.map((proudcet) => (
            <div className="col-lg-4 col-md-4 col-sm-6" key={proudcet.id}>
              <Cardsst proudcet={proudcet} ShowButton={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardProducte;
