const NewsLetter = () => {
  return (
    <section className="newsletter-section bg-secondary">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 order-md-1 order-lg-1">
                <div className="newsletter-title-wrap">
                    <div className="newsletter-icons">
                        <i className="iconrt- icon-rt-mail-open-outline"></i>
                    </div>
                    <div className="newsletter-content">
                        <h2>Sign up to Newsletter</h2>
                        <p>...and receive $20 coupon for first shopping</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6  mt-4 mt-md-0 order-md-2 order-lg-3">
                <div className="newsletter-whatsapp-wrap">
                    <div className="newsletter-whatsapp-inner">
                        <div className="whatsapp-icons">
                            <i className="iconrt- icon-rt-logo-whatsapp"></i>
                        </div>
                        <div className="whatsapp-content">
                            <p>Call Us 24/7</p>
                            <h2>+8 88 55 4168</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-12 mt-4 mt-lg-0 order-md-3 order-lg-2">
                <form action="#" className="newsletter-form">
                    <input type="email" placeholder="Your Email Address..." required />
                    <button className="btn btn--primary submit-button fw-semibold" type="submit">Subscribe!</button>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default NewsLetter