import { useState } from 'react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleHover = (e, enter) => {
    if (enter) {
      e.target.classList.add('bg-warning', 'text-dark');
    } else {
      e.target.classList.remove('bg-warning', 'text-dark');
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark px-3 shadow  "
        style={{ backgroundColor: '#161D27' }}
      >
        <div className="container-fluid ms-5" >
          <a className="navbar-brand d-flex align-items-center gap-2 justify-content-end" href="#">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="fw-bold small text-warning">
              Ramsha, Shepherd & Foundation
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${open ? 'show' : ''} justify-content-end`}  >
            <ul className="navbar-nav me-4 gap-5 ms-2 ">
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-semibold px-2 py-1 "
                  href="#"
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  Home
                </a>
              </li>

              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle text-white px-2 py-1 d-flex align-items-center gap-2"

                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  About us
                </a>
                <ul className="dropdown-menu bg-dark border-0">
                  <li>
                    <a
                      className="dropdown-item text-white px-2 py-1"
                      href="#"
                      onMouseEnter={(e) => handleHover(e, true)}
                      onMouseLeave={(e) => handleHover(e, false)}
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-white px-2 py-1 "
                      href="#"
                      onMouseEnter={(e) => handleHover(e, true)}
                      onMouseLeave={(e) => handleHover(e, false)}
                    >
                      Vision
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white px-2 py-1 "
                  href="#"
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  Services
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white px-2 py-1 d-flex align-items-center gap-2"

                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  Articles
                </a>
                <ul className="dropdown-menu bg-dark border-0">
                  <li>
                    <a
                      className="dropdown-item text-white px-2 py-1 "
                      href="#"
                      onMouseEnter={(e) => handleHover(e, true)}
                      onMouseLeave={(e) => handleHover(e, false)}
                    >
                      Legal Insights
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-white px-2 py-1 "
                      href="#"
                      onMouseEnter={(e) => handleHover(e, true)}
                      onMouseLeave={(e) => handleHover(e, false)}
                    >
                      Case Studies
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white px-2 py-1 me-5 "
                  href="#"
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
