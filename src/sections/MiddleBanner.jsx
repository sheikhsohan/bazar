const MiddleBanner = () => {
  return (
    <section className="banner-section section-space-pb">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-8">
                <a href="shop.html" className="single-banner-area">
                    <div className="single-benner-image">
                        <img src="assets/images/banners/img1_banner3_mixy1.webp" alt="" />
                    </div>
                    <div className="banner-content">
                        <h2 className="banner-title">100% Natural Organic</h2>
                        <h2 className="banner-title2 fw-semibold">Strawberry Velvet Cake</h2>
                        <h2 className="banner-offer mt-3">
                            $30.66
                        </h2>
                    </div>
                </a>
            </div>

            <div className="col-lg-4 col-md-4">
                <a href="shop.html" className="single-banner-area sm-mt-30">
                    <div className="single-benner-image">
                        <img src="assets/images/banners/img2_banner3_mixy1.webp" alt="" />
                    </div>
                    <div className="banner-content">
                        <h2 className="banner-title">Organic</h2>
                        <h2 className="banner-title2 fw-semibold">Nuts</h2>
                        <h2 className="banner-offer mt-3">
                            $26.88
                        </h2>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default MiddleBanner