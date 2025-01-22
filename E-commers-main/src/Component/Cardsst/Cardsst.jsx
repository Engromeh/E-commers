
const Cardsst = (props) => {
  
const {proudcet}=props
return (
    <>


      <div className="card" style={{ width: "18rem" }}>
        <img
          src={proudcet.image}
          className="card-img-top"
          alt="Sample Image"
        />
        <div className="card-body">
          <h5 className="card-title">{proudcet.name}</h5>
          <p className="card-text">
          {proudcet.description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );

};

export default Cardsst;
