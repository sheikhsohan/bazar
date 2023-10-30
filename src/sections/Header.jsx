import { Carousel } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item active>
          <div className="single-hero-slider hero-slider-one">
            <a href="#" className="hero-slider-bg-image">
              <img src="assets/images/hero/slider1_mixy1.webp" alt="" />
            </a>
            <div className="container">
              <div className="single-hero-slider-inner">
                <h5 className="sub-title">100% ORGANIC POTATO</h5>
                <h1 className="title">Potato Chips & Pepper With Onion</h1>
                <h3 className="hero-price">
                  Starting At <b> $18.36</b>
                </h3>
                <a className="slideshow-button" href="shop.html">
                  shop now <i className="icon-rt-arrow-right-solid"></i>
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="single-hero-slider hero-slider-one">
            <a href="#" className="hero-slider-bg-image">
              <img src="assets/images/hero/slider2_mixy1.webp" alt="" />
            </a>
            <div className="container">
              <div className="single-hero-slider-inner">
                <h5 className="sub-title">100% ORGANIC POTATO</h5>
                <h1 className="title">Potato Chips & Pepper With Onion</h1>
                <h3 className="hero-price">
                  Starting At <b> $18.36</b>
                </h3>
                <a className="slideshow-button" href="shop.html">
                  shop now <i className="icon-rt-arrow-right-solid"></i>
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Header;
