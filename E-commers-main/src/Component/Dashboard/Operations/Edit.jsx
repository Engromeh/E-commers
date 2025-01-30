import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { proudectId } = useParams(); // جلب ID المنتج من الرابط

  // جلب البيانات الحالية للمنتج
  useEffect(() => {
    axios
      .get(`http://localhost:3000/porudect/${proudectId}`)
      .then((response) => {
        const { title, price, category, description, image } = response.data;
        setTitle(title);
        setPrice(price);
        setCategory(category);
        setDescription(description);
        setImage(image);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [proudectId]);

  // تحديث بيانات المنتج عند الضغط على "Update"
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/porudect/${proudectId}`, {
        title,
        price,
        category,
        description,
        image,
      })
      .then(() => {
        alert("Product updated successfully!");
        navigate("/Dashbord");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        alert("Failed to update product.");
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Edit Product</h2>
      <form onSubmit={submitHandler}>
        {image && (
          <div className="text-center mb-3">
            <img
              src={image}
              alt="Product"
              className="img-thumbnail"
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="ProudectTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="ProudectTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProudectDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="ProudectDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProudectPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="ProudectPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default Edit;
