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
                                            <li><a href="#">$ USD</a></li>
                                            <li><a href="#"> € EURO</a></li>
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
            <div className="header-bottom-area bg-secondary header-sticky">
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
                                        <li className="active"><a href="index.html">Home Page <i className="icon-rt-arrow-down"></i></a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Home Page 1</a></li>
                                                <li><a href="index-2.html">Home Page 2</a></li>
                                                <li><a href="index-3.html">Home Page 3</a></li>
                                                <li><a href="index-4.html">Home Page 4</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="#">Shop <i className="icon-rt-arrow-down"></i></a>
                                            <ul className="mega-menu">
                                                <li><a href="#">LAYOUT</a>
                                                    <ul>
                                                        <li><a href="shop.html">Shop Left Sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                        <li><a href="shop-no-sidebar.html">Shop No Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="blog.html">FEATURES <span>NEW</span></a>
                                                    <ul>
                                                        <li><a href="shop-category-description-top.html">Category Description <span className="menu-label">On Top</span></a></li>
                                                        <li><a href="shop-category-description-bottom.html">Category Description <span className="menu-label">On Bottom</span></a></li>
                                                        <li><a href="shop-show-subcategories.html">Show sub categories</a></li>
                                                        <li><a href="shop-show-loadmore.html">Load More Items</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">PRODUCT STYLE</a>
                                                    <ul>
                                                        <li><a href="shop-product-1.html">Style 01</a></li>
                                                        <li><a href="shop-product-2.html">Style 02</a></li>
                                                        <li><a href="shop-product-3.html">Style 03</a></li>
                                                        <li><a href="shop-product-4.html">Style 04</a></li>
                                                        <li><a href="shop-product-5.html">Style 05</a></li>
                                                        <li><a href="shop-product-6.html">Style 06</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Product <i className="icon-rt-arrow-down"></i></a>
                                            <ul className="mega-menu-col-2">
                                                <li><a href="#">PRODUCT GALLERY</a>
                                                    <ul>
                                                        <li><a href="product-details.html">Simple product</a></li>
                                                        <li><a href="product-details-image-top.html">Image Top</a></li>
                                                        <li><a href="product-details-fluid.html">Full width</a></li>
                                                        <li><a href="product-details-image-grid-1-column.html">Grid - 1 column</a></li>
                                                        <li><a href="product-details-image-grid-2-column.html">Grid - 2 columns</a></li>
                                                        <li><a href="product-details-vertical-thumbnails.html">Vertical Thumbnails</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">PRODUCT DETAILS</a>
                                                    <ul>
                                                        <li><a href="product-details-countdown.html">Product details countdown</a></li>
                                                        <li><a href="product-details-video-button.html">Video Button</a></li>
                                                        <li><a href="product-details-video-in-gallery.html">Video In Gallery</a></li>
                                                        <li><a href="product-details-accordion.html">Tab accordion</a></li>
                                                        <li><a href="product-details-tab-vertical.html">Tab vertical</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages <i className="icon-rt-arrow-down"></i></a>
                                            <ul className="mega-menu-col-2">
                                                <li>
                                                    <a href="#">OTHER PAGE</a>
                                                    <ul>
                                                        <li><a href="my-account.html">My account</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="shopping-cart.html">Shopping Cart</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">OTHER PAGE</a>
                                                    <ul>
                                                        <li><a href="contact-us.html">Contact us</a></li>
                                                        <li><a href="about-us.html">About us</a></li>
                                                        <li><a href="error-404.html">404 page</a></li>
                                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                                    </ul>

                                                </li>

                                            </ul>
                                        </li>
                                        <li><a href="blog.html">Blog <i className="icon-rt-arrow-down"></i></a>
                                            <ul className="mega-menu-col-2">
                                                <li>
                                                    <a href="#">BLOG TYPE</a>
                                                    <ul>
                                                        <li><a href="blog.html">Blog grid</a></li>
                                                        <li><a href="blog-mask.html">Blog mask</a></li>
                                                        <li><a href="blog-list.html">Blog list</a></li>
                                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                        <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">SINGLE POST</a>
                                                    <ul>
                                                        <li><a href="blog-details.html">Post example #1</a></li>
                                                        <li><a href="blog-details-2.html">Post example #2</a></li>
                                                        <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                                        <li><a href="blog-details.html">Right Sidebar</a></li>
                                                        <li><a href="blog-details-no-sidebar.html">No Sidebar</a></li>
                                                        <li><a href="blog-details-right-title.html">Right Title</a></li>
                                                    </ul>

                                                </li>

                                            </ul>
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
                                                            <ul className="sub-menu">
                                                                <li><a href="index.html">Home Page 1</a></li>
                                                                <li><a href="index-2.html">Home Page 2</a></li>
                                                                <li><a href="index-3.html">Home Page 3</a></li>
                                                                <li><a href="index-4.html">Home Page 4</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-children">
                                                            <a href="#">Shop</a>
                                                            <ul className="sub-menu">
                                                                <li className="has-children">
                                                                    <a href="#">LAYOUT</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="shop.html">Shop Left Sidebar</a></li>
                                                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                                        <li><a href="shop-no-sidebar.html">Shop No Sidebar</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="has-children">
                                                                    <a href="#">FEATURES NEW</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a className="position-relative d-block" href="shop-category-description-top.html">Category Description <span className="menu-label">On Top</span></a></li>
                                                                        <li><a className="position-relative d-block" href="shop-category-description-bottom.html">Category Description <span className="menu-label">On Bottom</span></a></li>
                                                                        <li><a href="shop-show-subcategories.html">Show sub categories</a></li>
                                                                        <li><a href="shop-show-loadmore.html">Load More Items</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="has-children">
                                                                    <a href="#">PRODUCT STYLE</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="shop-product-1.html">Style 01</a></li>
                                                                        <li><a href="shop-product-2.html">Style 02</a></li>
                                                                        <li><a href="shop-product-3.html">Style 03</a></li>
                                                                        <li><a href="shop-product-4.html">Style 04</a></li>
                                                                        <li><a href="shop-product-5.html">Style 05</a></li>
                                                                        <li><a href="shop-product-6.html">Style 06</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-children">
                                                            <a href="#">Product</a>
                                                            <ul className="sub-menu">
                                                                <li className="has-children">
                                                                    <a href="#">PRODUCT GALLERY</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="product-details.html">Simple product</a></li>
                                                                        <li><a href="product-details-image-top.html">Image Top</a></li>
                                                                        <li><a href="product-details-fluid.html">Full width</a></li>
                                                                        <li><a href="product-details-image-grid-1-column.html">Grid - 1 column</a></li>
                                                                        <li><a href="product-details-image-grid-2-column.html">Grid - 2 columns</a></li>
                                                                        <li><a href="product-details-vertical-thumbnails.html">Vertical Thumbnails</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="has-children">
                                                                    <a href="#">PRODUCT DETAILS</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="product-details-countdown.html">Product details countdown</a></li>
                                                                        <li><a href="product-details-video-button.html">Video Button</a></li>
                                                                        <li><a href="product-details-video-in-gallery.html">Video In Gallery</a></li>
                                                                        <li><a href="product-details-accordion.html">Tab accordion</a></li>
                                                                        <li><a href="product-details-tab-vertical.html">Tab vertical</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-children">
                                                            <a href="#">Pages</a>
                                                            <ul className="sub-menu">
                                                                <li className="has-children">
                                                                    <a href="#">OTHER PAGE 1</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="my-account.html">My account</a></li>
                                                                        <li><a href="checkout.html">Checkout</a></li>
                                                                        <li><a href="shopping-cart.html">Shopping Cart</a></li>
                                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="has-children">
                                                                    <a href="#">OTHER PAGE 2</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="contact-us.html">Contact us</a></li>
                                                                        <li><a href="about-us.html">About us</a></li>
                                                                        <li><a href="error-404.html">404 page</a></li>
                                                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-children">
                                                            <a href="#">Blogs</a>
                                                            <ul className="sub-menu">
                                                                <li className="has-children">
                                                                    <a href="#">BLOG TYPE</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="blog.html">Blog grid</a></li>
                                                                        <li><a href="blog-mask.html">Blog mask</a></li>
                                                                        <li><a href="blog-list.html">Blog list</a></li>
                                                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                                        <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li className="has-children">
                                                                    <a href="#">SINGLE POST</a>
                                                                    <ul className="sub-menu">
                                                                        <li><a href="blog-details.html">Post example #1</a></li>
                                                                        <li><a href="blog-details-2.html">Post example #2</a></li>
                                                                        <li><a href="blog-details-left-sidebar.html">Left Sidebar</a></li>
                                                                        <li><a href="blog-details.html">Right Sidebar</a></li>
                                                                        <li><a href="blog-details-no-sidebar.html">No Sidebar</a></li>
                                                                        <li><a href="blog-details-right-title.html">Right Title</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
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