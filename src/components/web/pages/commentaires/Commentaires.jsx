import React, { Component } from "react";

export default class Commentaires extends Component {
  render() {
    return (
      <>
        <div className="comments">
          <h3 className="title">3 Comments</h3>

          <ul>
            <li>
              <div className="comment">
                <figure className="comment-media">
                  <a href="#">
                    <img
                      src="assets/images/blog/comments/1.jpg"
                      alt="User name"
                    />
                  </a>
                </figure>

                <div className="comment-body">
                  <a href="#" className="comment-reply">
                    Reply
                  </a>
                  <div className="comment-user">
                    <h4>
                      <a href="#">Jimmy Pearson</a>
                    </h4>
                    <span className="comment-date">
                      November 9, 2018 at 2:19 pm
                    </span>
                  </div>

                  <div className="comment-content">
                    <p>
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Nullam mollis. Ut justo. Suspendisse potenti.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <ul>
                <li>
                  <div className="comment">
                    <figure className="comment-media">
                      <a href="#">
                        <img
                          src="assets/images/blog/comments/2.jpg"
                          alt="User name"
                        />
                      </a>
                    </figure>

                    <div className="comment-body">
                      <a href="#" className="comment-reply">
                        Reply
                      </a>
                      <div className="comment-user">
                        <h4>
                          <a href="#">Lena Knight</a>
                        </h4>
                        <span className="comment-date">
                          November 9, 2018 at 2:19 pm
                        </span>
                      </div>

                      <div className="comment-content">
                        <p>Morbi interdum mollis sapien. Sed ac risus.</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>

            <li>
              <div className="comment">
                <figure className="comment-media">
                  <a href="#">
                    <img
                      src="assets/images/blog/comments/3.jpg"
                      alt="User name"
                    />
                  </a>
                </figure>

                <div className="comment-body">
                  <a href="#" className="comment-reply">
                    Reply
                  </a>
                  <div className="comment-user">
                    <h4>
                      <a href="#">Johnathan Castillo</a>
                    </h4>
                    <span className="comment-date">
                      November 9, 2018 at 2:19 pm
                    </span>
                  </div>

                  <div className="comment-content">
                    <p>
                      Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                      euismod dui, eu pulvinar nunc sapien ornare nisl.
                      Phasellus pede arcu, dapibus eu, fermentum et, dapibus
                      sed, urna.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="reply">
          <div className="heading">
            <h3 className="title">Leave A Reply</h3>
            <p className="title-desc">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <form action="#">
            <label for="reply-message" className="sr-only">
              Comment
            </label>
            <textarea
              name="reply-message"
              id="reply-message"
              cols="30"
              rows="4"
              className="form-control"
              required
              placeholder="Comment *"
            ></textarea>

            <div className="row">
              <div className="col-md-6">
                <label for="reply-name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="reply-name"
                  name="reply-name"
                  required
                  placeholder="Name *"
                />
              </div>

              <div className="col-md-6">
                <label for="reply-email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="reply-email"
                  name="reply-email"
                  required
                  placeholder="Email *"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-outline-primary-2">
              <span>POST COMMENT</span>
              <i className="icon-long-arrow-right"></i>
            </button>
          </form>
        </div>
      </>
    );
  }
}
