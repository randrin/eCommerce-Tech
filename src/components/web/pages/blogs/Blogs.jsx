import React, { Component } from "react";
import { Navbar, Footer, HeroBanner } from "../../../../components";
import { Translation } from "react-i18next";
import { Breadcrumb } from "../../../../site";

export default class Blogs extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Translation>
          {(t) => (
            <>
              <main className="main">
                <HeroBanner
                  title={t("BLOGS.HEROBANNER_TITLE")}
                  subtitle={t("BLOGS.HEROBANNER_SUBTITLE")}
                />
                <Breadcrumb title={<span>{t("BLOGS.BREADCRUMB")}</span>} />
                <div className="page-content">
                  <div className="container">
                    <nav className="blog-nav">
                      <ul className="menu-cat entry-filter justify-content-center">
                        <li className="active">
                          <a href="#" data-filter="*">
                            All Blog Posts<span>12</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-filter=".lifestyle">
                            Lifestyle<span>3</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-filter=".shopping">
                            Shopping<span>1</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-filter=".fashion">
                            Fashion<span>3</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-filter=".travel">
                            Travel<span>6</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" data-filter=".hobbies">
                            Hobbies<span>2</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="entry-container max-col-4">
                      <div className="entry-item lifestyle shopping col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <a href="single.html">
                              <img
                                src="assets/images/blog/masonry/4cols/post-1.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>

                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 22, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">2 Comments</a>
                            </div>

                            <h2 className="entry-title">
                              <a href="single.html">
                                Cras ornare tristique elit.
                              </a>
                            </h2>

                            <div className="entry-cats">
                              in <a href="#">Lifestyle</a>,
                              <a href="#">Shopping</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item lifestyle col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <a href="single.html">
                              <img
                                src="assets/images/blog/masonry/4cols/post-2.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 21, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">0 Comments</a>
                            </div>
                            <h2 className="entry-title">
                              <a href="single.html">
                                Aenean dignissim pellente squefelis.
                              </a>
                            </h2>
                            <div className="entry-cats">
                              in <a href="#">Lifestyle</a>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="entry-item fashion lifestyle col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <div
                              className="owl-carousel owl-simple owl-light owl-nav-inside"
                              data-toggle="owl"
                            >
                              <a href="single.html">
                                <img
                                  src="assets/images/blog/masonry/4cols/post-3.jpg"
                                  alt="image desc"
                                />
                              </a>
                              <a href="single.html">
                                <img
                                  src="assets/images/blog/masonry/4cols/post-3-2.jpg"
                                  alt="image desc"
                                />
                              </a>
                            </div>
                          </figure>

                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 18, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">3 Comments</a>
                            </div>

                            <h2 className="entry-title">
                              <a href="single.html">
                                Utaliquam sollicitudin leo.
                              </a>
                            </h2>

                            <div className="entry-cats">
                              in <a href="#">Fashion</a>,
                              <a href="#">Lifestyle</a>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <a href="single.html">
                              <img
                                src="assets/images/blog/masonry/4cols/post-4.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>

                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 15, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">4 Comments</a>
                            </div>

                            <h2 className="entry-title">
                              <a href="single.html">
                                Quisque volutpat mattiseros.
                              </a>
                            </h2>

                            <div className="entry-cats">
                              in <a href="#">Travel</a>
                            </div>
                          </div>
                        </article>
                      </div>

                      <div className="entry-item travel hobbies col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media entry-video">
                            <a href="single.html">
                              <img
                                src="assets/images/blog/masonry/4cols/post-5.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>

                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 11, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">2 Comments</a>
                            </div>

                            <h2 className="entry-title">
                              <a href="single.html">
                                Vivamus vestibulum ntulla necante.
                              </a>
                            </h2>
                            <div className="entry-cats">
                              in <a href="#">Travel</a>,<a href="#">Hobbies</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item hobbies col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <a href="single.html">
                              <img
                                src="assets/images/blog/masonry/4cols/post-6.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 10, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">4 Comments</a>
                            </div>
                            <h2 className="entry-title">
                              <a href="single.html">Quisque a lectus. </a>
                            </h2>
                            <div className="entry-cats">
                              in <a href="#">Hobbies</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <a href="single.html">
                              <img
                                src="assets/images/blog/masonry/4cols/post-7.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 11, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">3 Comments</a>
                            </div>
                            <h2 className="entry-title">
                              <a href="single.html">
                                Fusce pellentesque suscipit.
                              </a>
                            </h2>
                            <div className="entry-cats">
                              in <a href="#">Travel</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item fashion col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <div
                              className="owl-carousel owl-simple owl-light owl-nav-inside"
                              data-toggle="owl"
                            >
                              <a href="single.html">
                                <img
                                  src="assets/images/blog/masonry/4cols/post-8.jpg"
                                  alt="image desc"
                                />
                              </a>
                              <a href="single.html">
                                <img
                                  src="assets/images/blog/masonry/4cols/post-8-2.jpg"
                                  alt="image desc"
                                />
                              </a>
                            </div>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 08, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">0 Comments</a>
                            </div>
                            <h2 className="entry-title">
                              <a href="single.html">
                                Utaliquam sollicitudin leo.
                              </a>
                            </h2>
                            <div className="entry-cats">
                              in <a href="#">Fashion</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <a href="single.html">
                              <img
                                src="assets/images/blog/masonry/4cols/post-9.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 07, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">5 Comments</a>
                            </div>
                            <h2 className="entry-title">
                              <a href="single.html">
                                Quisque volutpat mattiseros.
                              </a>
                            </h2>
                            <div className="entry-cats">
                              in <a href="#">Travel</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <a href="single.html">
                              <img
                                src="assets/images/blog/masonry/4cols/post-10.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 07, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">1 Comments</a>
                            </div>
                            <h2 className="entry-title">
                              <a href="single.html">
                                Donec quis duidolor tempor interdum.
                              </a>
                            </h2>
                            <div className="entry-cats">
                              in <a href="#">Travel</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <a href="single.html">
                              <img
                                src="assets/images/blog/masonry/4cols/post-11.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 06, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">3 Comments</a>
                            </div>
                            <h2 className="entry-title">
                              <a href="single.html">Aliquam erat volutpat.</a>
                            </h2>
                            <div className="entry-cats">
                              in <a href="#">Travel</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item fashion col-sm-6 col-md-4 col-lg-3">
                        <article className="entry entry-grid text-center">
                          <figure className="entry-media">
                            <a href="single.html">
                              <img
                                src="assets/images/blog/masonry/4cols/post-12.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <a href="#">Nov 05, 2018</a>
                              <span className="meta-separator">|</span>
                              <a href="#">0 Comments</a>
                            </div>
                            <h2 className="entry-title">
                              <a href="single.html">
                                Cras ornare tristique elit.
                              </a>
                            </h2>
                            <div className="entry-cats">
                              in <a href="#">Shopping</a>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a
                            className="page-link page-link-prev"
                            href="#"
                            aria-label="Previous"
                            tabIndex="-1"
                            aria-disabled="true"
                          >
                            <span aria-hidden="true">
                              <i className="icon-long-arrow-left"></i>
                            </span>
                            Prev
                          </a>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link page-link-next"
                            href="#"
                            aria-label="Next"
                          >
                            Next{" "}
                            <span aria-hidden="true">
                              <i className="icon-long-arrow-right"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </main>
              <Footer />
            </>
          )}
        </Translation>
      </>
    );
  }
}
