import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Carddetails from "../../Proudectes/ItemsDetelis/Carddetails/Carddetails";

const View = () => {
  const Params = useParams();

  const [Viewpro, setViewpro] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/porudect/${Params.proudectId}`)
      .then((res) => res.json())
      .then((data) => setViewpro(data));
  }, []);
  return (
    <>
      <Carddetails proudectes={Viewpro} />
      <Link    className="btn btn-info btn-sm"    to={"/Dashbord"} style={{ marginTop: "-55px", textDecoration: "none" ,  marginLeft:"72%" }}>
        Back
      </Link>
    </>
  );
};

export default View;
