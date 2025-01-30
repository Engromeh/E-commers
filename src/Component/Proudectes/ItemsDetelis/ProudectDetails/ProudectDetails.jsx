import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Carddetails from "../Carddetails/Carddetails";

const ProudectDetails = () => {
  const [proudectes, setProudectes] = useState(null); 
  const Params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/porudect/${Params.proudectId}`)
      .then((response) => response.json())
      .then((data) => setProudectes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [Params.proudectId]);

  if (!proudectes) {
    return <p>Loading product details...</p>;
  }

  return (
    <>
      <h2>Hello everybody</h2>
      <Carddetails proudectes={proudectes} />
<Link    className="btn btn-info btn-sm"    to={"/"} style={{ marginTop: "-25px", textDecoration: "none" }}>
        Back
      </Link>    </>
  );
};

export default ProudectDetails;
