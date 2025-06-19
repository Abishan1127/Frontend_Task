import im from '../assets/images/hero4.jpg';

export default function HeroSection() {
  return (
    <div className='container-fluid p-0'>
    <div
      className="min-vh-100 d-flex align-items-center text-white px-3 px-md-5 "
      style={{
        backgroundImage: `url(${im})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}
    >
      <div className="container">
        <div className="col-md-8 ">
          <h1 className="display-4 fw-bold lh-1 ">
            Setting your Future<br />with medicine<br />and Care
          </h1>
          <p className="lead mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem debitis<br /> magni earum, amet illum natus facere, cupiditate nesciunt iure officiis recusandae <br />repellendus illo ipsum dolores itaque ex temporibus rerum.
          </p>
          <a href="#contact" className="btn btn-warning text-black fw-semibold mt-4 rounded-0">
            GET IN TOUCH
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
