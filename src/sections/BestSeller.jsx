import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bestSellerData = [
  {
    title: "Fresh organic kiwi",
    price: "$10.00 - $70.00",
    imageSrc: "assets/images/products/product-image-2-1.jpg",
    rating: 4,
  },
  {
    title: "Dried mango",
    price: "$10.00 - $70.00",
    imageSrc: "assets/images/products/product-image-1-1.jpg",
    rating: 4,
  },
  {
    title: "Dried banana",
    price: "$60.00 - $80.00",
    imageSrc: "assets/images/products/product-image-3-1.jpg",
    rating: 4,
  },
  {
    title: "Crunchy crisps",
    price: "$50.00 - $90.00",
    imageSrc: "assets/images/products/product-image-4-1.jpg",
    rating: 4,
  },
  {
    title: "Jewel cranberries",
    price: "$60.00 - $67.00",
    imageSrc: "assets/images/products/product-image-5-1.jpg",
    rating: 4,
  },
  {
    title: "Fresh Broccoli",
    price: "$60.00 - $68.00",
    imageSrc: "assets/images/products/product-image-6-1.jpg",
    rating: 4,
  },
];

const BestSellerItem = ({ title, price, imageSrc }) => (
  <div className="product-slider-active product-border-box">
    <div className="single-product-item">
      <div className="single-product-item-image">
        <a href="product-details.html" className="prodcut-images">
          <img className="primary-image" src={imageSrc} alt="" />
        </a>
        <ul className="single-product-item-action">
          <li className="single-product-item-action-list product-cart">
            <a href="#" className="single-product-item-action-link">
              <i className="icon-rt-basket-outline"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="single-product-item-content">
        <div className="single-product-item-rating">
          <i className="icon-rt-star-solid select-star"></i>
          <i className="icon-rt-star-solid select-star"></i>
          <i className="icon-rt-star-solid select-star"></i>
          <i className="icon-rt-star-solid select-star"></i>
          <i className="icon-rt-star-solid"></i>
        </div>
        <h6 className="single-product-item-title">
          <a href="product-details.html">{title}</a>
        </h6>
        <div className="single-product-item-price">{price}</div>
      </div>
    </div>
  </div>
);

const BestSeller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of products to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <section className="product-item-section pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="section-title-wrap">
              <h2 className="section-title">Best Sellers</h2>
              <p>Add bestselling products to the weekly lineup</p>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...settings}>
            {bestSellerData.map((product, index) => (
              <BestSellerItem
                key={index}
                title={product.title}
                price={product.price}
                imageSrc={product.imageSrc}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
