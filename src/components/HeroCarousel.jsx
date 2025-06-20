
import React from 'react';
import im1 from '../assets/images/hero4.jpg';
import im2 from '../assets/images/hero5.jpg';
import im3 from '../assets/images/hero7.jpg';

export default function HeroSection() {
  return (
    <div className="container-fluid p-0">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000" // 2-second auto-slide interval
      >

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div
              className="min-vh-100 d-flex align-items-center text-white px-3 px-md-5"
              style={{
                backgroundImage: `url(${im1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="container">
                <div className="col-md-8">
                  <h1 className="display-4 fw-bold lh-1">
                    Setting your Future<br />with medicine<br />and Care
                  </h1>
                  <p className="lead mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem debitis<br />
                    magni earum, amet illum natus facere, cupiditate nesciunt iure officiis recusandae<br />
                    repellendus illo ipsum dolores itaque ex temporibus rerum.
                  </p>
                  <a href="#contact" className="btn btn-warning text-black fw-semibold mt-4 rounded-0">
                    GET IN TOUCH
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div
              className="min-vh-100 d-flex align-items-center text-white px-3 px-md-5"
              style={{
                backgroundImage: `url(${im2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="container">
                <div className="col-md-8">
                  <h1 className="display-4 fw-bold lh-1">
                    Your Health<br />Our Mission<br />Trusted Always
                  </h1>
                  <p className="lead mt-3">
                    Compassionate care, advanced technology,<br />
                    and a team dedicated to your wellness and recovery.
                  </p>
                  <a href="#contact" className="btn btn-warning text-black fw-semibold mt-4 rounded-0">
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div
              className="min-vh-100 d-flex align-items-center text-white px-3 px-md-5"
              style={{
                backgroundImage: `url(${im3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="container">
                <div className="col-md-8">
                  <h1 className="display-4 fw-bold lh-1">
                    Innovation in<br />Healthcare<br />Starts Here
                  </h1>
                  <p className="lead mt-3">
                    Discover how we’re redefining patient care<br />
                    through modern medical practices and research.
                  </p>
                  <a href="#contact" className="btn btn-warning text-black fw-semibold mt-4 rounded-0">
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

