import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-dark text-white px-4 py-5">
      <div className="container">
        <div className="row text-center text-md-start g-4">
          {/* Logo + Description */}
          <div className="col-md-3">
            <img src={logo} alt="Logo" className="mb-3" style={{ height: '40px' }} />
            <p>
              Ramsha, Romania, Shepherd & Foundation Lorem ipsum reprehenderit eius temporibus omnis nesciunt odit, necessitatibus in quae delectus.
            </p>
            <p className="mt-2 text-warning small">Medicines, Parmercy, Hospital</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="text-warning mb-2">QUICK LINK</h5>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white text-decoration-none d-block mb-1">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block mb-1">Services</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block mb-1">Our Team</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block mb-1">Facts/Information</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block mb-1">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block mb-1">Testimonials</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block mb-1">Contact Us</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-md-3">
            <h5 className="text-warning mb-2">HELP</h5>
            <p>Email:<br /><span className="small">admin@stepherd.com</span></p>
            <p className="mt-2">Phone:<br /><span className="small">021-223-2222</span></p>
            <p className="mt-2">ABN:<br /><span className="small">22 542 221 222</span></p>
          </div>

          {/* Locations */}
          <div className="col-md-3">
            <h5 className="text-warning mb-2">LOCATIONS</h5>
            <p className="small mb-2">No 186, Kili town,<br />A9 Road, Kilinochchi</p>
            <p className="small mb-2">Stepan road Kilinochchi, 44000</p>
            <p className="small mb-2">PO Box 44000, NBM</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-3 border-top border-secondary small">
          © Copyright <span className="text-warning">Ramsha, Romania, Shepherd & Foundation.</span> All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
