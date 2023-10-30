const Navbar = () => {
    return (
      <>
          <header className="header">
          <div className="desktop-header header1 d-none d-lg-block">
              <div className="header-top-area border-bottom">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-lg-6 col-md-6">
                              <div className="header-top-left-area">
                                  <p className="header-top-text-message">Free shipping on orders over $25. Read more.</p>
                              </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                              <div className="header-top-right-area header-top-settings">
                                  <p className="header-top-text-message"> <i className="icon-rt-call-outline"></i> Need help? Call Us: <a href="tel:888554168">+8 88 55 4168</a></p>
  
                                  <ul className="nav align-items-center">
                                      <li className="language">English <i className="icon-rt-arrow-down"></i>
                                          <ul className="dropdown-list">
                                              <li><a href="#">English</a></li>
                                              <li><a href="#">French</a></li>
                                          </ul>
                                      </li>
                                      <li className="curreny-wrap">Currency <i className="icon-rt-arrow-down"></i>
                                          <ul className="dropdown-list curreny-list">
                                              <li><a href="#">$ BDT</a></li>
                                              <li><a href="#"> € USD</a></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="header-middle-area">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-lg-3">
                              <div className="logo">
                                  <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="search-box">
                                  <form className="search-field">
                                      <input type="text" className="search-field" placeholder="Search product..." />
                                      <button className="search-btn"><i className="icon-rt-loupe"></i></button>
                                  </form>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="header-middle-right-area">
                                  <div className="my-account">
                                      <a href="#" className="header-action-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="icon-rt-user"></i></a>
                                  </div>
                                  <div className="wishlist">
                                      <a href="wishlist.html" className="header-action-item">
                                          <i className="icon-rt-heart2"></i>
                                          <span className="wishlist-count">2</span>
                                      </a>
                                  </div>
                                  <div className="cart">
                                      <a href="#miniCart" className="header-action-item toolbar-btn">
                                          <i className="icon-rt-basket-outline"></i>
                                          <span className="wishlist-count">3</span>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="header-bottom-area bg-secondary sticky">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-lg-3">
                              <div className="categories-menu-wrap_box">
                                  <div className="categories_menu">
                                      <div className="categories_title">
                                          <h5 className="categori_toggle"><i className="icon-rt-bars-solid"></i> Categories</h5>
                                      </div>
                                      <div className="categories_menu_toggle">
                                          <ul>
                                              <li className="menu_item_children categorie_list"> <a href="#"><img src="assets/images/categories-icons/meat.svg" alt="" />Meats & Seafood<i className="icon-rt-arrow-right"></i></a>
                                                  <ul className="categories_mega_menu">
                                                      <li><a href="#">Fish</a></li>
                                                      <li><a href="#"> Shellfish</a></li>
                                                      <li><a href="#">Roe</a></li>
                                                  </ul>
                                              </li>
                                              <li className="menu_item_children"><a href="#"><img src="assets/images/categories-icons/coffee-cup.svg" alt="" /> Beverages <i className="icon-rt-arrow-right"></i></a>
                                                  <ul className="categories_mega_menu">
                                                      <li><a href="#">Compound Butter</a></li>
                                                      <li><a href="#">Cultured Butter</a></li>
                                                      <li><a href="#">Whipped Butter</a></li>
                                                  </ul>
                                              </li>
                                              <li className="menu_item_children"><a href="#"><img src="assets/images/categories-icons/bread.svg" alt="" /> Bread & Bakery <i className="icon-rt-arrow-right"></i></a>
                                                  <ul className="categories_mega_menu">
                                                      <li><a href="#">Mango</a></li>
                                                      <li><a href="#">Plumsor</a></li>
                                                      <li><a href="#">Raisins</a></li>
                                                  </ul>
                                              </li>
                                              <li className="menu_item_children"><a href="#"><img src="assets/images/categories-icons/snowflake.svg" alt="" /> Frozen Foods<i className="icon-rt-arrow-right"></i></a>
                                                  <ul className="categories_mega_menu">
                                                      <li><a href="#">Mango</a></li>
                                                      <li><a href="#">Plumsor</a></li>
                                                      <li><a href="#">Raisins</a></li>
                                                  </ul>
                                              </li>
                                              <li className="menu_item_children"><a href="#"><img src="assets/images/categories-icons/cauliflower.svg" alt="" /> Fresh Vegetables <i className="icon-rt-arrow-right"></i></a>
                                                  <ul className="categories_mega_menu">
                                                      <li><a href="#">Mango</a></li>
                                                      <li><a href="#">Plumsor</a></li>
                                                      <li><a href="#">Raisins</a></li>
                                                  </ul>
                                              </li>
                                              <li className="menu_item_children"><a href="#"><img src="assets/images/categories-icons/almond.svg" alt="" /> Dry Fruits <i className="icon-rt-arrow-right"></i></a>
                                                  <ul className="categories_mega_menu">
                                                      <li><a href="#">Mango</a></li>
                                                  </ul>
                                              </li>
                                              <li><a href="#"><img src="assets/images/categories-icons/egg.svg" alt="" />Eggs & Dairy</a></li>
                                              <li><a href="#">Snacks</a></li>
                                              <li><a href="#">Pantry</a></li>
                                              <li className="hide-child"><a href="shop.html">Fruits</a></li>
                                              <li className="categories-more-less ">
                                                  <a className="more-default"><span className="c-more"></span>+ More Categories</a>
                                                  <a className="less-show"><span className="c-more"></span>- Less Categories</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-9">
                              <div className="main-menu-area white_text">
  
                                  <nav className="main-navigation">
                                      <ul>
                                          <li className="active"><a href="index.html">Home</a>
                                          </li>
  
                                          <li><a href="#">Shop</a>
                                          </li>
                                          <li><a href="#">Product</a>
                                          </li>
                                          <li><a href="#">Pages</a>
                                          </li>
                                          <li><a href="blog.html">Blog</a>
                                          </li>
                                      </ul>
                                  </nav>
  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
  
          <div className="mobile-header main-header m-header-1 d-block d-lg-none">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col mobile-header-start">
                          <div className="d-flex gap-2">
                              <div className="menu-mobile">
                                  <a href="#moible-menu" className="m-menu-btn mobile-menu-active">
                                      <i className="icon-rt-bars-solid"></i>
                                  </a>
                              </div>
  
                              <div className="m-menu-side" id="moible-menu">
  
                                  <div className="mobile-menu-inner">
                                      <a href="#" className="side-close-icon"><i className="icon-rt-close-outline"></i></a>
                                      <ul className="mobile-lan-curr-nav align-items-center">
                                          <li className="language">English <i className="icon-rt-arrow-down"></i>
                                              <ul className="dropdown-list">
                                                  <li><a href="#">English</a></li>
                                                  <li><a href="#">French</a></li>
                                              </ul>
                                          </li>
                                          <li className="curreny-wrap">Currency <i className="icon-rt-arrow-down"></i>
                                              <ul className="dropdown-list curreny-list">
                                                  <li><a href="#">$ USD</a></li>
                                                  <li><a href="#"> € EURO</a></li>
                                              </ul>
                                          </li>
                                      </ul>
                                      <div className="mobile-top-text-message">
                                          <p className="text-message">Free shipping on orders over $25. Read more.</p>
                                          <p className="text-message"> <i className="icon-rt-call-outline"></i> Need help? Call Us: <a href="tel:888554168">+8 88 55 4168</a></p>
                                      </div>
                                      <div className="mobile-tab-wrap">
                                          <div className="mobile-tab-menu">
                                              <ul className="nav" role="tablist">
                                                  <li className="tab__item nav-item">
                                                      <a className="active" data-bs-toggle="tab" href="#menu_tab" role="tab">Menu</a>
                                                  </li>
                                                  <li className="tab__item nav-item">
                                                      <a data-bs-toggle="tab" href="#categories_tab" role="tab">Categories</a>
                                                  </li>
                                              </ul>
                                          </div>
                                          <div className="tab-content">
                                              <div className="tab-pane fade show active" id="menu_tab" role="tabpanel">
                                                  <nav className="offcanvas-navigation">
                                                      <ul>
                                                          <li className="has-children">
                                                              <a href="index.html">Home</a>
                                                          </li>
                                                          <li className="has-children">
                                                              <a href="#">Shop</a>
                                                          </li>
                                                          <li className="has-children">
                                                              <a href="#">Product</a>
                                                          </li>
                                                          <li className="has-children">
                                                              <a href="#">Pages</a>
                                                          </li>
                                                          <li className="has-children">
                                                              <a href="#">Blogs</a>
                                                          </li>
  
                                                      </ul>
                                                  </nav>
                                              </div>
                                              <div className="tab-pane fade" id="categories_tab" role="tabpanel">
                                                  <div className="categories_menu_toggle mobile_categories_menu_toggle">
                                                      <ul>
                                                          <li className="menu_item_children categorie_list"> <a href="#"><img src="assets/images/categories-icons/meat.svg" alt="" />Meats & Seafood<i className="icon-rt-arrow-right"></i></a>
                                                              <ul className="categories_mega_menu">
                                                                  <li><a href="#">Fish</a></li>
                                                                  <li><a href="#"> Shellfish</a></li>
                                                                  <li><a href="#">Roe</a></li>
                                                              </ul>
                                                          </li>
                                                          <li className="menu_item_children"><a href="#"><img src="assets/images/categories-icons/coffee-cup.svg" alt="" /> Beverages <i className="icon-rt-arrow-right"></i></a>
                                                              <ul className="categories_mega_menu">
                                                                  <li><a href="#">Compound Butter</a></li>
                                                                  <li><a href="#">Cultured Butter</a></li>
                                                                  <li><a href="#">Whipped Butter</a></li>
                                                              </ul>
                                                          </li>
                                                          <li className="menu_item_children"><a href="#"><img src="assets/images/categories-icons/bread.svg" alt="" /> Bread & Bakery <i className="icon-rt-arrow-right"></i></a>
                                                              <ul className="categories_mega_menu">
                                                                  <li><a href="#">Mango</a></li>
                                                                  <li><a href="#">Plumsor</a></li>
                                                                  <li><a href="#">Raisins</a></li>
                                                              </ul>
                                                          </li>
                                                          <li className="menu_item_children"><a href="#"><img src="assets/images/categories-icons/snowflake.svg" alt="" /> Frozen Foods<i className="icon-rt-arrow-right"></i></a>
                                                              <ul className="categories_mega_menu">
                                                                  <li><a href="#">Mango</a></li>
                                                                  <li><a href="#">Plumsor</a></li>
                                                                  <li><a href="#">Raisins</a></li>
                                                              </ul>
                                                          </li>
                                                          <li className="menu_item_children"><a href="#"><img src="assets/images/categories-icons/cauliflower.svg" alt="" /> Fresh Vegetables <i className="icon-rt-arrow-right"></i></a>
                                                              <ul className="categories_mega_menu">
                                                                  <li><a href="#">Mango</a></li>
                                                                  <li><a href="#">Plumsor</a></li>
                                                                  <li><a href="#">Raisins</a></li>
                                                              </ul>
                                                          </li>
                                                          <li className="menu_item_children"><a href="#"><img src="assets/images/categories-icons/almond.svg" alt="" /> Dry Fruits <i className="icon-rt-arrow-right"></i></a>
                                                              <ul className="categories_mega_menu">
                                                                  <li><a href="#">Mango</a></li>
                                                              </ul>
                                                          </li>
                                                          <li><a href="#"><img src="assets/images/categories-icons/egg.svg" alt="" />Eggs & Dairy</a></li>
                                                          <li><a href="#">Snacks</a></li>
                                                          <li><a href="#">Pantry</a></li>
                                                          <li className="hide-child"><a href="shop.html">Fruits</a></li>
                                                          <li className="categories-more-less ">
                                                              <a className="more-default"><span className="c-more"></span>+ More Categories</a>
                                                              <a className="less-show"><span className="c-more"></span>- Less Categories</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
  
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
  
                              <div className="header-block search-block-mobile search-sidebar">
                                  <button className="mobile-search-popup"><i className="icon-rt-loupe"></i></button>
                              </div>
                              <div className="popup-search-wrapper">
                                  <a href="#" className="search-close-button"><i className="icon-rt-close-outline"></i></a>
                                  <div className="search-box">
                                      <form action="#" className="search-form searchbox">
                                          <div className="input-wrapper">
                                              <input type="text" className="ajax_search search-field mixy_ajax_search" placeholder="Search..." />
                                              <button className="search-submit" type="submit">
                                                  <i className="icon-rt-loupe"></i>
                                              </button>
                                          </div>
                                      </form>
                                      <div className="search_content">
                                          <div className="search-keywords-list">
                                              <p>Popular searches :</p>
                                              <ul className="header-search-popular">
                                                  <li><a href="#">fruits</a></li>
                                                  <li><a href="#">fresh</a></li>
                                                  <li><a href="#">organic</a></li>
                                                  <li><a href="#">tomato</a></li>
                                                  <li><a href="#">meat</a></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col mobile-header-mobile">
                          <div className="logo text-center">
                              <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                          </div>
                      </div>
                      <div className="col mobile-header-right">
                          <div className="header-middle-right-area">
                              <div className="my-account">
                                  <a href="#" className="header-action-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="icon-rt-user"></i></a>
                              </div>
                              <div className="cart">
                                  <a href="#miniCart" className="header-action-item toolbar-btn">
                                      <i className="icon-rt-basket-outline"></i>
                                      <span className="wishlist-count">3</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
      </header>
      </>
    )
  }
  
  export default Navbar