import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bestSellerData = [
  {
    title: "Fresh organic kiwi",
    price: "$10.00 - $70.00",
    imageSrc: "assets/images/products/product-image-1-1.jpg",
    rating: 4,
  },
  {
    title: "Dried mango",
    price: "$10.00 - $70.00",
    imageSrc: "assets/images/products/product-image-2-1.jpg",
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
  {
    title: "Dried mango",
    price: "$10.00 - $70.00",
    imageSrc: "assets/images/products/product-image-7-1.jpg",
    rating: 4,
  },
  {
    title: "Almond organic",
    price: "$50.00 - $77.00",
    imageSrc: "assets/images/products/product-image-8-1.jpg",
    rating: 4,
  },
  {
    title: "Dried mang",
    price: "$10.00 - $70.00",
    imageSrc: "assets/images/products/product-image-9-1.jpg",
    rating: 4,
  },
  {
    title: "Dried mango",
    price: "$10.00 - $70.00",
    imageSrc: "assets/images/products/product-image-10-1.jpg",
    rating: 4,
  },
  {
    title: "Dried mango",
    price: "$10.00 - $70.00",
    imageSrc: "assets/images/products/product-image-11-1.jpg",
    rating: 4,
  },
  {
    title: "Orange",
    price: "$40.00 - $70.00",
    imageSrc: "assets/images/products/product-image-12-1.jpg",
    rating: 4,
  },
];

const BestSellerItem = ({ title, price, imageSrc }) => (
  <div className="product-slider-active-grid product-border-box">
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

const NewArrivals = () => {
  const isLgDevice = window.innerWidth >= 992; // Check for lg device

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Add a breakpoint for large (lg) devices
        settings: {
          slidesToShow: isLgDevice ? 6 : 1, // Display 6 items on lg devices, 1 on others
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const splitProductsIntoTwoRows = (products) => {
    const firstRow = products.slice(0, 6);
    const secondRow = products.slice(6, 12);
    return [firstRow, secondRow];
  };

  const [firstRow, secondRow] = splitProductsIntoTwoRows(bestSellerData);

  return (
    <section className="product-item-section pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="section-title-wrap">
              <h2 className="section-title">New Arrivals</h2>
              <p>Add new products to the weekly lineup</p>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...settings}>
            {isLgDevice
              ? firstRow.map((product, index) => (
                  <BestSellerItem
                    key={index}
                    title={product.title}
                    price={product.price}
                    imageSrc={product.imageSrc}
                  />
                ))
              : bestSellerData.map((product, index) => (
                  <BestSellerItem
                    key={index}
                    title={product.title}
                    price={product.price}
                    imageSrc={product.imageSrc}
                  />
                ))}
          </Slider>
        </div>
        {isLgDevice && (
          <div className="row">
            <Slider {...settings}>
              {secondRow.map((product, index) => (
                <BestSellerItem
                  key={index}
                  title={product.title}
                  price={product.price}
                  imageSrc={product.imageSrc}
                />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
