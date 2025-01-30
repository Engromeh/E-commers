import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Table = () => {
  const [proud, setProud] = useState([]);

  // Fetch all items
  const allitems = () => {
    fetch("http://localhost:3000/porudect")
      .then((res) => res.json())
      .then((data) => setProud(data));
  };

  useEffect(() => {
    allitems();
  }, []);
//very important
  const deletitem = (proudectId) => {
    Swal.fire({
      title: `Are you sure you want to delete this item?`,
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/porudect/${proudectId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => {
            Swal.fire("Deleted!", "The item has been deleted.", "success");
            allitems(); 
          });
      }
    });
  };

  return (
    <div style={{ margin: "8rem auto", maxWidth: "90%" }}>
      <Link className="btn btn-primary mb-4" to={"/Add"} >Add New Product</Link>;

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {proud.map((pr) => (
            <tr key={pr.id}>
              <td>{pr.id}</td>
              <td>{pr.title}</td>
              <td>{pr.category}</td>
              <td>
                <div className="d-flex gap-2">
                  <Link
                    className="btn btn-success btn-sm"
                    to={`/proudect/${pr.id}`}
                  >
                    View
                  </Link>
                  <Link className="btn btn-info btn-sm"                     to={`/proudect/${pr.id}`}
>Edit</Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deletitem(pr.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
