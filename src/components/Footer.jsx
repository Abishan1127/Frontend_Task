import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer>
      {/* Top Footer */}
      <div className="text-white px-4 py-5" style={{ backgroundColor: '#161D27' }}>
        <div className="container-fluid">
          <div className="row text-center text-md-start g-0 justify-content-end lg-me-0">
            {/* Logo + Description */}
            <div className="col-md-4 sm-me-5">
              <img src={logo} alt="Logo" className="mb-3" style={{ height: '40px' }} />
              <p className="col-md-8 sm-me-5">
                Ramsha, Romania, Shepherd & Foundation Lorem ipsum reprehenderit eius temporibus omnis nesciunt odit, necessitatibus in quae delectus eius temporibus.
              </p>
              <p className="mt-2 text-warning small">
                Medicines, Vaccines, Pharmacy, Hospital
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 ms-5">
              <h5 className="text-warning mb-2">QUICK LINK</h5>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-white text-decoration-none d-block mb-2">About Us</a></li>
                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Services</a></li>
                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Our Team</a></li>
                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Facts/Information</a></li>
                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Blog</a></li>
                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Testimonials</a></li>
                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Contact Us</a></li>
              </ul>
            </div>

            {/* Help */}
            <div className="col-md-2 ms-5">
              <h5 className="text-warning mb-2">HELP</h5>
              <p>Email:<br /><span className="small">admin@stepherd.com</span></p>
              <p className="mt-2">Phone:<br /><span className="small">021-223-2222</span></p>
              <p className="mt-2">ABN:<br /><span className="small">22 542 221 222</span></p>
            </div>

            {/* Locations */}
            <div className="col-md-2 lg-me-5">
              <h5 className="text-warning mb-2">LOCATIONS</h5>
              <p className="small mb-2">No 186, Kili town,<br />A9 Road, Kilinochchi</p>
              <p className="small mb-2">Stepan road , 44000</p>
              <p className="small mb-2">PO Box 44000, NBM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="text-center text-white py-2 border-top border-secondary small"
        style={{ backgroundColor: '#11161E' }}
      >
        <div className="m-2">
          © Copyright <span className="text-warning">Ramsha, Romania, Shepherd & Foundation.</span> All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
