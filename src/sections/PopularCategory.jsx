const PopularCategory = () => {
    // Create an array of category data
    const categories = [
      {
        name: 'Fresh Vegetables',
        imageSrc: 'assets/images/categories/fresh_vegetables.webp',
        productCount: 8,
      },
      {
        name: 'Bread & Bakery',
        imageSrc: 'assets/images/categories/bread_bakery.webp',
        productCount: 9,
      },
      {
        name: 'Canned Goods',
        imageSrc: 'assets/images/categories/canned_goods.webp',
        productCount: 10,
      },
      {
        name: 'Eggs & Dairy',
        imageSrc: 'assets/images/categories/eggs_dairy.webp',
        productCount: 18,
      },
      {
        name: 'Meats & Seafood',
        imageSrc: 'assets/images/categories/meats_seafood.webp',
        productCount: 8,
      },
      {
        name: 'Soft Drinks',
        imageSrc: 'assets/images/categories/soft_drinks.webp',
        productCount: 8,
      },
    ];
  
    return (
      <section className="popular-categories-section section-space-pb">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="section-title-wrap">
                <h2 className="section-title">Popular Categories</h2>
                <p>Some of our popular categories include grocery</p>
              </div>
            </div>
          </div>
  
          <div className="categories-box product-border-box">
            <div className="col-lg-3 d-none d-lg-block">
              <a href="shop.html" className="categories-banner-wrap">
                <img src="assets/images/banners/img_banner4_mixy1.webp" alt="" />
              </a>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="categories-slider-active d-flex flex-wrap align-items-center justify-content-center">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="single-categories-item col-lg-4 col-md-6 col-sm-12 border"
                  >
                    <div className="category-image">
                      <a href="shop-show-subcategories.html">
                        <img src={category.imageSrc} alt="" />
                      </a>
                    </div>
                    <div className="category-content">
                      <h6>
                        <a href="shop-show-subcategories.html">{category.name}</a>
                      </h6>
                      <p className="count">{category.productCount} Products</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PopularCategory;
  