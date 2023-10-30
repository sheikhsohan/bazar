const Footer = () => {
  return (
    <>
      <footer className="footer-section border-top">
        <div className="footer-top-area pt-4 section-space-pb border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                  </div>
                  <ul className="footer-social-list">
                    <li>
                      <a href="https://www.facebook.com/" target='blank' className="facebook"><i className="icon-rt-4-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="blank" className="twitter"><i className="icon-rt-logo-twitter"></i></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="blank" className="instagram"><i className="icon-rt-logo-instagram"></i></a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="blank" className="youtube"><i className="icon-rt-2-youtube2"></i></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="footer-widget">
                  <h6 className="footer-title">INFORMATION</h6>
                  <ul className="footer-list">
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Checkout</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="footer-widget">
                  <h6 className="footer-title">MY ACCOUNT</h6>
                  <ul className="footer-list">
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Downloads</a></li>
                    <li><a href="#">Addresses</a></li>
                    <li><a href="#">Account details</a></li>
                    <li><a href="#">Lost password</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="footer-widget">
                  <h6 className="footer-title">DOWNLOAD OUR APP</h6>
                  <p className="footer-apps-dec">Fast & Convenient Access</p>
                  <ul className="footer-apps-list">
                    <li><a href="#"><img src="assets/images/others/apple_store.png" alt="" /></a></li>
                    <li><a href="#"><img src="assets/images/others/google_play.png" alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copy-right-content">
              <p>Copyright © <a href="https://sheikhsohan.netlify.app/">Sheikh Sohan</a>. All Rights Reserved.</p>
              <div className="payment-image">
                <img src="assets/images/others/payment.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
