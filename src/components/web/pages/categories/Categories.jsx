import React, { Component } from "react";

export default class Categories extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h2 className="title text-center mb-4">Explore Popular Categories</h2>
          <div className="cat-blocks-container">
            <div className="row">
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img
                        src="assets/images/demos/demo-4/cats/1.png"
                        alt="Category image"
                      />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Computer & Laptop</h3>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img
                        src="assets/images/demos/demo-4/cats/2.png"
                        alt="Category image"
                      />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Digital Cameras</h3>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img
                        src="assets/images/demos/demo-4/cats/3.png"
                        alt="Category image"
                      />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Smart Phones</h3>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img
                        src="assets/images/demos/demo-4/cats/4.png"
                        alt="Category image"
                      />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Televisions</h3>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img
                        src="assets/images/demos/demo-4/cats/5.png"
                        alt="Category image"
                      />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Audio</h3>
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img
                        src="assets/images/demos/demo-4/cats/6.png"
                        alt="Category image"
                      />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Smart Watches</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="banner banner-overlay banner-overlay-light">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-4/banners/banner-1.png"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content">
                  <h4 className="banner-subtitle">
                    <a href="#">Smart Offer</a>
                  </h4>
                  <h3 className="banner-title">
                    <a href="#">
                      Save $150{" "}
                      <strong>
                        on Samsung <br />
                        Galaxy Note9
                      </strong>
                    </a>
                  </h3>
                  <a href="#" className="banner-link">
                    Shop Now<i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="banner banner-overlay banner-overlay-light">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-4/banners/banner-2.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content">
                  <h4 className="banner-subtitle">
                    <a href="#">Time Deals</a>
                  </h4>
                  <h3 className="banner-title">
                    <a href="#">
                      <strong>Bose SoundSport</strong> <br />
                      Time Deal -30%
                    </a>
                  </h3>
                  <a href="#" className="banner-link">
                    Shop Now<i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="banner banner-overlay banner-overlay-light">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-4/banners/banner-3.png"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content">
                  <h4 className="banner-subtitle">
                    <a href="#">Clearance</a>
                  </h4>
                  <h3 className="banner-title">
                    <a href="#">
                      <strong>GoPro - Fusion 360</strong> <br />
                      Save $70
                    </a>
                  </h3>
                  <a href="#" className="banner-link">
                    Shop Now<i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3"></div>
      </>
    );
  }
}
