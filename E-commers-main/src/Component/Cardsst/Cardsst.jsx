import { Link } from "react-router-dom";

const Cardsst = (props) => {
  const { proudcet, ShowButton } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={proudcet.image} className="card-img-top" alt="Sample Image" />
        <div className="card-body">
          <h5 className="card-title">{proudcet.name}</h5>
          <p className="card-text">{proudcet.description}</p>

          <Link
            href="#"
            className="btn btn-primary"
            to={`/proudect/${proudcet.id}`}
          >
            Detalis
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cardsst;
