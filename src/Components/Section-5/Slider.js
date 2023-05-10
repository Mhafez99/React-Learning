import Image1 from './imgs/img1.jpg';
import Image2 from './imgs/img2.png';
import Image3 from './imgs/img3.jpg';
import './Slider.css';
function Slider() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image1} className="d-block w-100 height-500" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="d-block w-100 height-500" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Image3} className="d-block w-100 height-500" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </>
    );
}
export default Slider;