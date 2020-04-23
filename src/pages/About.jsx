import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Temoignages } from "../components";

export default class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="main">
          <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About us
                </li>
              </ol>
            </div>
          </nav>
          <div className="container">
            <div
              className="page-header page-header-big text-center"
              style={{
                backgroundImage:
                  "url(" + "assets/images/about-header-bg.jpg" + ")",
              }}
            >
              <h1 className="page-title text-white">
                About us<span className="text-white">Who we are</span>
              </h1>
            </div>
          </div>
          <div className="page-content pb-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-3 mb-lg-0">
                  <div className="icon-box icon-box-left icon-box-circle">
                    <span className="icon-box-icon">
                      <i className="icon-info-circle"></i>
                    </span>
                    <div className="icon-box-content">
                      <h2 className="title">Our Vision</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
                        urna. In nisi neque, aliquet vel, dapibus id, mattis
                        vel, nisi. Sed pretium, ligula sollicitudin laoreet
                        viverra, tortor libero sodales leo, eget blandit nunc
                        tortor eu nibh.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-3 mb-lg-0">
                  <div className="icon-box icon-box-left icon-box-circle">
                    <span className="icon-box-icon">
                      <i className="icon-info-circle"></i>
                    </span>
                    <div className="icon-box-content">
                      <h2 className="title">Our Mission</h2>
                      <p>
                        Sed egestas, ante et vulputate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue. Morbi
                        purus libero, faucibus adipiscing, commodo quis, gravida
                        id, est. Sed lectus. Praesent elementum hendrerit
                        tortor. Sed semper lorem at felis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5"></div>
            </div>
            {/* <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 mb-3 mb-lg-0">
                    <h2 className="title">Who We Are</h2>
                    <p className="lead text-primary mb-3">
                      Pellentesque odio nisi, euismod pharetra a ultricies{" "}
                      <br />
                      in diam. Sed arcu. Cras consequat
                    </p>
                    <p className="mb-2">
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Suspendisse potenti. Sed egestas, ante et vulputate
                      volutpat, uctus metus libero eu augue.{" "}
                    </p>
                    <a
                      href="blog.html"
                      className="btn btn-sm btn-minwidth btn-outline-primary-2"
                    >
                      <span>VIEW OUR NEWS</span>
                      <i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                    <div className="about-images">
                      <img
                        src="assets/images/about/img-1.jpg"
                        alt=""
                        className="about-img-front"
                      />
                      <img
                        src="assets/images/about/img-2.jpg"
                        alt=""
                        className="about-img-back"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div
              className="bg-image pt-7 pb-5 pt-md-12 pb-md-9"
              style={{
                backgroundImage:
                  "url(" + "assets/images/backgrounds/bg-4.jpg" + ")",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-6 col-md-3">
                    <div className="count-container text-center">
                      <div className="count-wrapper text-white">
                        <span
                          className="count"
                          data-from="0"
                          data-to="40"
                          data-speed="3000"
                          data-refresh-interval="50"
                        >
                          41
                        </span>
                        k+
                      </div>
                      <h3 className="count-title text-white">Happy Customer</h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="count-container text-center">
                      <div className="count-wrapper text-white">
                        <span
                          className="count"
                          data-from="0"
                          data-to="20"
                          data-speed="3000"
                          data-refresh-interval="50"
                        >
                          20
                        </span>
                        +
                      </div>
                      <h3 className="count-title text-white">
                        Years in Business
                      </h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="count-container text-center">
                      <div className="count-wrapper text-white">
                        <span
                          className="count"
                          data-from="0"
                          data-to="95"
                          data-speed="3000"
                          data-refresh-interval="50"
                        >
                          97
                        </span>
                        %
                      </div>
                      <h3 className="count-title text-white">Return Clients</h3>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="count-container text-center">
                      <div className="count-wrapper text-white">
                        <span
                          className="count"
                          data-from="0"
                          data-to="15"
                          data-speed="3000"
                          data-refresh-interval="50"
                        >
                          15
                        </span>
                      </div>
                      <h3 className="count-title text-white">Awards Won</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="brands-text">
                    <h2 className="title">
                      The world's premium design brands in one destination.
                    </h2>
                    <p>
                      Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                      In nisi neque, aliquet vel, dapibus id, mattis vel, nis
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="brands-display">
                    <div className="row justify-content-center">
                      <div className="col-6 col-sm-4">
                        <a href="#" className="brand">
                          <img
                            src="assets/images/brands/1.png"
                            alt="Brand Name"
                          />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4">
                        <a href="#" className="brand">
                          <img
                            src="assets/images/brands/2.png"
                            alt="Brand Name"
                          />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4">
                        <a href="#" className="brand">
                          <img
                            src="assets/images/brands/3.png"
                            alt="Brand Name"
                          />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4">
                        <a href="#" className="brand">
                          <img
                            src="assets/images/brands/4.png"
                            alt="Brand Name"
                          />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4">
                        <a href="#" className="brand">
                          <img
                            src="assets/images/brands/5.png"
                            alt="Brand Name"
                          />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4">
                        <a href="#" className="brand">
                          <img
                            src="assets/images/brands/6.png"
                            alt="Brand Name"
                          />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4">
                        <a href="#" className="brand">
                          <img
                            src="assets/images/brands/7.png"
                            alt="Brand Name"
                          />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4">
                        <a href="#" className="brand">
                          <img
                            src="assets/images/brands/8.png"
                            alt="Brand Name"
                          />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4">
                        <a href="#" className="brand">
                          <img
                            src="assets/images/brands/9.png"
                            alt="Brand Name"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mt-4 mb-6" />
              <h2 className="title text-center mb-4">Meet Our Team</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="member member-anim text-center">
                    <figure className="member-media">
                      <img
                        src="assets/images/team/member-1.jpg"
                        alt="member photo"
                      />
                      <figcaption className="member-overlay">
                        <div className="member-overlay-content">
                          <h3 className="member-title">
                            Samanta Grey<span>Founder & CEO</span>
                          </h3>
                          <p>
                            Sed pretium, ligula sollicitudin viverra, tortor
                            libero sodales leo, eget blandit nunc.
                          </p>
                          <div className="social-icons social-icons-simple">
                            <a
                              href="#"
                              className="social-icon"
                              title="Facebook"
                              target="_blank"
                            >
                              <i className="icon-facebook-f"></i>
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Twitter"
                              target="_blank"
                            >
                              <i className="icon-twitter"></i>
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Instagram"
                              target="_blank"
                            >
                              <i className="icon-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                    <div className="member-content">
                      <h3 className="member-title">
                        Samanta Grey<span>Founder & CEO</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="member member-anim text-center">
                    <figure className="member-media">
                      <img
                        src="assets/images/team/member-2.jpg"
                        alt="member photo"
                      />
                      <figcaption className="member-overlay">
                        <div className="member-overlay-content">
                          <h3 className="member-title">
                            Bruce Sutton<span>Sales & Marketing Manager</span>
                          </h3>
                          <p>
                            Sed pretium, ligula sollicitudin viverra, tortor
                            libero sodales leo, eget blandit nunc.
                          </p>
                          <div className="social-icons social-icons-simple">
                            <a
                              href="#"
                              className="social-icon"
                              title="Facebook"
                              target="_blank"
                            >
                              <i className="icon-facebook-f"></i>
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Twitter"
                              target="_blank"
                            >
                              <i className="icon-twitter"></i>
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Instagram"
                              target="_blank"
                            >
                              <i className="icon-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                    <div className="member-content">
                      <h3 className="member-title">
                        Bruce Sutton<span>Sales & Marketing Manager</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="member member-anim text-center">
                    <figure className="member-media">
                      <img
                        src="assets/images/team/member-3.jpg"
                        alt="member photo"
                      />
                      <figcaption className="member-overlay">
                        <div className="member-overlay-content">
                          <h3 className="member-title">
                            Janet Joy<span>Product Manager</span>
                          </h3>
                          <p>
                            Sed pretium, ligula sollicitudin viverra, tortor
                            libero sodales leo, eget blandit nunc.
                          </p>
                          <div className="social-icons social-icons-simple">
                            <a
                              href="#"
                              className="social-icon"
                              title="Facebook"
                              target="_blank"
                            >
                              <i className="icon-facebook-f"></i>
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Twitter"
                              target="_blank"
                            >
                              <i className="icon-twitter"></i>
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Instagram"
                              target="_blank"
                            >
                              <i className="icon-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                    <div className="member-content">
                      <h3 className="member-title">
                        Janet Joy<span>Product Manager</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2"></div>
            <div className="text-center mt-3 mb-5">
              <a
                href="blog.html"
                className="btn btn-sm btn-minwidth-lg btn-outline-primary-2"
              >
                <span>LETS START WORK WITH US</span>
                <i className="icon-long-arrow-right"></i>
              </a>
            </div>

            {/* <div className="about-testimonials bg-light-2 pt-6 pb-6">
              <div className="container">
                <h2 className="title text-center mb-3">
                  What Customer Say About Us
                </h2>

                <Temoignages />
              </div>
            </div> */}
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
