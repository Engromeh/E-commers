import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [ID, setID] = useState("");
  const [image, setimage] = useState(null);


  const navigate = useNavigate();

  const submiteof = (e) => {
    e.preventDefault();
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
    

    axios
      .post("http://localhost:3000/porudect", {
        title: title,
        price: price,
        category: category,
        id: ID,
        image: image,
      })
      .then((data) => {
        console.log(data);
        navigate("/Dashbord");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        width:"544px",
      }}
    >
      <form
        onSubmit={submiteof}
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Add Product
        </h2>
        <div className="mb-3">
          <label htmlFor="idProudect" className="form-label">
            ID
          </label>
          <input
            type="number"
            className="form-control"
            id="idProudect"
            placeholder="Product id"
            value={ID}
            onChange={(e) => setID(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProudectTitel" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="ProudectTitel"
            placeholder="Product Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="PriseProudect" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="PriseProudect"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProudectCategory" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="ProudectCategory"
            placeholder="Product Category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            required
          />
        </div>
        {/* <div className="mb-3">
        <label for="formFileLg" class="form-label">Image</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file"  value={image}
            onChange={(e) => setimage(e.target.value)} />
        </div> */}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", marginTop: "10px" }}
        >
          Add Product
        </button>
      </form>
      <Link
        className="btn btn-info btn-sm"
        to={"/Dashbord"}
        style={{
          position: "absolute",
       bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textDecoration: "none",
        }}
      >
        Back
      </Link>
    </div>
  );
};

export default Add;