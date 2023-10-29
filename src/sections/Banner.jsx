const BannerData = [
    {
      title: "Chocolate Cookies",
      title2: "Best Sweets In Town",
      offer: "FROM 20% OFF",
      imageSrc: "assets/images/banners/img1_banner1_mixy1.webp",
    },
    {
      title: "Capture The",
      title2: "Delicious Moments",
      offer: "FROM 30% OFF",
      imageSrc: "assets/images/banners/img1_banner1_mixy2.webp",
    },
  ];
  
  const Banner = () => {
    return (
      <div className="banner-section section-space-ptb">
        <div className="container">
          <div className="row">
            {BannerData.map((banner, index) => (
              <div className="col-lg-6 col-md-6 mt-2" key={index}>
                <a href="shop.html" className="single-banner-area">
                  <div className="single-benner-image">
                    <img src={banner.imageSrc} alt="" />
                  </div>
                  <div className="banner-content">
                    <h2 className="banner-title">{banner.title}</h2>
                    <h2 className="banner-title2">{banner.title2}</h2>
                    <h2 className="banner-offer">{banner.offer}</h2>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  