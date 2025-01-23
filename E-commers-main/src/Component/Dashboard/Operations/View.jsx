import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    </>
  );
};

export default View;
