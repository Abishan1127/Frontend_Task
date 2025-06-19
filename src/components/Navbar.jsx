
// import { useState } from 'react';
// import logo from '../assets/images/logo.png';

// export default function Navbar() {
//   const handleHover = (e, enter) => {
//     if (enter) {
//       e.target.classList.add('bg-warning', 'text-dark');
//     } else {
//       e.target.classList.remove('bg-warning', 'text-dark');
//     }
//   };

//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-md navbar-dark px-3 shadow"
//         style={{ backgroundColor: '#161D27' }}
//       >
//         <div className="container-fluid ms-5">
//           <a className="navbar-brand d-flex align-items-center gap-2 justify-content-end" href="#">
//             <img src={logo} alt="Logo" style={{ height: '40px' }} />
//             <span className="fw-bold small text-warning sm-d">
//               Ramsha, Shepherd & Foundation
//             </span>
//           </a>

//           {/* Offcanvas toggler for mobile */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#mobileMenu"
//             aria-controls="mobileMenu"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Desktop menu (always visible on md and up) */}
//           <div className="navbar-collapse justify-content-end d-none d-md-flex">
//             <ul className="navbar-nav me-4 gap-5 ms-2">
//               <li className="nav-item">
//                 <a
//                   className="nav-link text-white fw-semibold px-2 py-1"
//                   href="#"
//                   onMouseEnter={(e) => handleHover(e, true)}
//                   onMouseLeave={(e) => handleHover(e, false)}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle text-white px-2 py-1 d-flex align-items-center gap-2"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                   onMouseEnter={(e) => handleHover(e, true)}
//                   onMouseLeave={(e) => handleHover(e, false)}
//                 >
//                   About us
//                 </a>
//                 <ul className="dropdown-menu bg-dark border-0">
//                   <li>
//                     <a
//                       className="dropdown-item text-white px-2 py-1"
//                       href="#"
//                       onMouseEnter={(e) => handleHover(e, true)}
//                       onMouseLeave={(e) => handleHover(e, false)}
//                     >
//                       Our Team
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="dropdown-item text-white px-2 py-1"
//                       href="#"
//                       onMouseEnter={(e) => handleHover(e, true)}
//                       onMouseLeave={(e) => handleHover(e, false)}
//                     >
//                       Vision
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link text-white px-2 py-1"
//                   href="#"
//                   onMouseEnter={(e) => handleHover(e, true)}
//                   onMouseLeave={(e) => handleHover(e, false)}
//                 >
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle text-white px-2 py-1 d-flex align-items-center gap-2"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                   onMouseEnter={(e) => handleHover(e, true)}
//                   onMouseLeave={(e) => handleHover(e, false)}
//                 >
//                   Articles
//                 </a>
//                 <ul className="dropdown-menu bg-dark border-0">
//                   <li>
//                     <a
//                       className="dropdown-item text-white px-2 py-1"
//                       href="#"
//                       onMouseEnter={(e) => handleHover(e, true)}
//                       onMouseLeave={(e) => handleHover(e, false)}
//                     >
//                       Legal Insights
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className="dropdown-item text-white px-2 py-1"
//                       href="#"
//                       onMouseEnter={(e) => handleHover(e, true)}
//                       onMouseLeave={(e) => handleHover(e, false)}
//                     >
//                       Case Studies
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link text-white px-2 py-1 me-5"
//                   href="#"
//                   onMouseEnter={(e) => handleHover(e, true)}
//                   onMouseLeave={(e) => handleHover(e, false)}
//                 >
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Offcanvas for mobile */}
//       <div
//         className="offcanvas offcanvas-end bg-dark"
//         tabIndex="-1"
//         id="mobileMenu"
//         aria-labelledby="mobileMenuLabel"
//       >
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title text-warning" id="mobileMenuLabel">
//             Menu
//           </h5>
//           <button
//             type="button"
//             className="btn-close btn-close-white"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
//           <ul className="navbar-nav gap-3">
//             <li className="nav-item">
//               <a
//                 className="nav-link text-white fw-semibold px-2 py-1"
//                 href="#"
//                 onMouseEnter={(e) => handleHover(e, true)}
//                 onMouseLeave={(e) => handleHover(e, false)}
//                 data-bs-dismiss="offcanvas"
//               >
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link text-white px-2 py-1"
//                 href="#"
//                 onMouseEnter={(e) => handleHover(e, true)}
//                 onMouseLeave={(e) => handleHover(e, false)}
//                 data-bs-dismiss="offcanvas"
//               >
//                 About us
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link text-white px-2 py-1"
//                 href="#"
//                 onMouseEnter={(e) => handleHover(e, true)}
//                 onMouseLeave={(e) => handleHover(e, false)}
//                 data-bs-dismiss="offcanvas"
//               >
//                 Services
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link text-white px-2 py-1"
//                 href="#"
//                 onMouseEnter={(e) => handleHover(e, true)}
//                 onMouseLeave={(e) => handleHover(e, false)}
//                 data-bs-dismiss="offcanvas"
//               >
//                 Articles
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link text-white px-2 py-1"
//                 href="#"
//                 onMouseEnter={(e) => handleHover(e, true)}
//                 onMouseLeave={(e) => handleHover(e, false)}
//                 data-bs-dismiss="offcanvas"
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }
import { useState } from 'react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const handleHover = (e, enter) => {
    if (enter) {
      e.target.classList.add('bg-warning', 'text-dark');
    } else {
      e.target.classList.remove('bg-warning', 'text-dark');
    }
  };

  // Handles dropdown toggling
  const handleDropdownToggle = (e) => {
    const dropdownMenu = e.target.nextElementSibling;
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('show');
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark px-3 shadow"
        style={{ backgroundColor: '#161D27' }}
      >
        <div className="container-fluid ms-5">
          <a className="navbar-brand d-flex align-items-center gap-2 justify-content-end" href="#">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="fw-bold small text-warning d-none d-md-inline">
              Ramsha, Shepherd & Foundation
            </span>
          </a>

          {/* Offcanvas toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop menu (always visible on md and up) */}
          <div className="navbar-collapse justify-content-end d-none d-md-flex">
            <ul className="navbar-nav me-4 gap-5 ms-2">
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-semibold px-2 py-1"
                  href="#"
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  Home
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
                      className="dropdown-item text-white px-2 py-1"
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
                  className="nav-link text-white px-2 py-1"
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
                      className="dropdown-item text-white px-2 py-1"
                      href="#"
                      onMouseEnter={(e) => handleHover(e, true)}
                      onMouseLeave={(e) => handleHover(e, false)}
                    >
                      Legal Insights
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-white px-2 py-1"
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
                  className="nav-link text-white px-2 py-1 me-5"
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

      {/* Offcanvas for mobile */}
      <div
        className="offcanvas offcanvas-end bg-dark"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-warning" id="mobileMenuLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a
                className="nav-link text-white fw-semibold px-2 py-1"
                href="#"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                data-bs-dismiss="offcanvas"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white px-2 py-1"
                href="#"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                data-bs-dismiss="offcanvas"
              >
                About us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white px-2 py-1"
                href="#"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                data-bs-dismiss="offcanvas"
              >
                Services
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-white px-2 py-1 dropdown-toggle"
                href="#"
                onClick={handleDropdownToggle} // Handle dropdown on click for mobile
              >
                Articles
              </a>
              <ul className="dropdown-menu bg-dark border-0">
                <li>
                  <a
                    className="dropdown-item text-white px-2 py-1"
                    href="#"
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                  >
                    Legal Insights
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-white px-2 py-1"
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
                className="nav-link text-white px-2 py-1"
                href="#"
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                data-bs-dismiss="offcanvas"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
