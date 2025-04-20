import { Link } from "react-router-dom";
const Cardsst = (props) => {
  const { proudcet, ShowButton } = props;
  return (
    <div className="card  justify-content-center" style={{ width: "23rem" , height:"95%" }}>
      <img src={proudcet.image} className="proudect-img card-img-top" alt={proudcet.title} />
      <div className="card-body">
        <h5 className="card-title">{proudcet.title}</h5>
        <p className="card-text">
  {proudcet.description
    ? proudcet.description
    : "No description available"}
</p>

        {ShowButton && (
          <Link
            className="btn btn-primary"
            to={`/proudect/${proudcet.id}`}
          >
            Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cardsst;
