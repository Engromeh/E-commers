import img1 from '../../Images/img 1.jpg'
import img2 from '../../Images/img 2.jpg'
import img3 from '../../Images/img 3.jpg'
import img4 from '../../Images/img 4.jpg'
import img5 from '../../Images/img 5.jpg'
import './Slider.css'
const Slider = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100 height-500" alt="..."/>
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
    </>
  )
}

export default Slider
