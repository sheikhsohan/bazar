const SupperDeals = () => {
  return (
    <>
      <section className="product-item-section section-space-pb">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="section-title-wrap">
                <h2 className="section-title">Super Deals Of The Week</h2>
                <p>
                  Dont miss this opportunity at a special discount just for this
                  week
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="single-product-item single-product-item-horizontal col-lg-6 col-md-12 col-sm-12 mt-2">
              <div className="single-product-item-image">
                <a href="product-details.html" className="prodcut-images">
                  <img
                    className="primary-image"
                    src="assets/images/products/product-image-7-1.jpg"
                    alt=""
                  />
                </a>
                <div className="progress-charts">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <div className="progress_stock-wrap">
                    <p className="stock-out">
                      Sold: <span className="stock-value">365</span>
                    </p>
                    <p className="stock-in">
                      Available: <span className="stock-value">634</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="single-product-item-content col-lg-6 col-md-3">
                <div className="single-product-item-rating">
                  <i className="icon-rt-star-solid select-star"></i>
                  <i className="icon-rt-star-solid select-star"></i>
                  <i className="icon-rt-star-solid select-star"></i>
                  <i className="icon-rt-star-solid select-star"></i>
                  <i className="icon-rt-star-solid"></i>
                </div>
                <h6 className="single-product-item-title">
                  <a href="#">Organic coconut</a>
                </h6>
                <div className="single-product-item-price">$10.00 - $70.00</div>
                <p className="text-conunter">Hurry up! Offer end ins:</p>

                <div
                  className="countdown-deals"
                  data-countdown="2024/11/01"
                ></div>
              </div>
            </div>
            <div className="single-product-item single-product-item-horizontal col-lg-6 col-md-12 mt-2">
              <div className="single-product-item-image">
                <a href="product-details.html" className="prodcut-images">
                  <img
                    className="primary-image"
                    src="assets/images/products/product-image-8-1.jpg"
                    alt=""
                  />
                </a>

                <div className="progress-charts">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <div className="progress_stock-wrap">
                    <p className="stock-out">
                      Sold: <span className="stock-value">365</span>
                    </p>
                    <p className="stock-in">
                      Available: <span className="stock-value">634</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="single-product-item-content col-lg-6 col-md-6">
                <div className="single-product-item-rating">
                  <i className="icon-rt-star-solid select-star"></i>
                  <i className="icon-rt-star-solid select-star"></i>
                  <i className="icon-rt-star-solid select-star"></i>
                  <i className="icon-rt-star-solid select-star"></i>
                  <i className="icon-rt-star-solid"></i>
                </div>
                <h6 className="single-product-item-title">
                  <a href="#">Almond organic</a>
                </h6>
                <div className="single-product-item-price">$10.00 - $70.00</div>
                <p className="text-conunter">Hurry up! Offer end ins:</p>

                <div
                  className="countdown-deals"
                  data-countdown="2023/09/01"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupperDeals;
