
import './Slider.css'

const Slider = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="{img1}" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="{{img2}}" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="{img3}" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="{img4}" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src='{img5}' className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slider;
