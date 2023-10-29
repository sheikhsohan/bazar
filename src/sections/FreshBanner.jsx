import React from 'react';

const bannerData = [
  {
    imageSrc: "assets/images/banners/img1_banner2_mixy1.webp",
    title: "Fresh Fruit Kiwis",
    price: "$39.99",
    link: "shop.html",
  },
  {
    imageSrc: "assets/images/banners/img2_banner2_mixy1.webp",
    title: "Fresh Fruit Kiwis",
    price: "$39.99",
    link: "shop.html",
  },
  {
    imageSrc: "assets/images/banners/img3_banner2_mixy1.webp",
    title: "Fresh Fruit Kiwis",
    price: "$39.99",
    link: "shop.html",
  },
];

const FreshBanner = () => {
  return (
    <div className="banner-section section-space-pb">
      <style>
      {`
        @media (max-width: 991px) {
          .banner3-md-margin {
            margin-top: 15px;
          }
        }
      `}
      </style>
      <div className="container">
        <div className="row">
          {bannerData.map((banner, index) => (
            <div key={index} className={`col-lg-4 col-md-6 col-sm-12${index === 2 ? ' banner3-md-margin' : ''} banner3-md-margin`}>
              <div className="single-banner-area">
                <div className="single-benner-image">
                  <img src={banner.imageSrc} alt="" />
                </div>
                <div className="banner-content">
                  <h2 className="banner-title2 fw-semibold">{banner.title}</h2>
                  <h2 className="banner-offer mt-3">
                    {banner.price}
                  </h2>
                  <a href={banner.link} className="mt-4 btn btn--primary btn--small">
                    Shop Now <i className="icon-rt-arrow-right-solid"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreshBanner;
