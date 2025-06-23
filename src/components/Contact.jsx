// import React, { useState } from 'react';
// import { MdPhone } from 'react-icons/md';

// export default function ConsultationForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});

//   const regexRules = {
//     name: /^[a-zA-Z\s]{3,50}$/,
//     email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//     phone: /^[0-9]{8,15}$/,
//     message: /^.{10,500}$/
//   };

//   const validateField = (name, value) => {
//     if (!regexRules[name].test(value)) {
//       return `Invalid ${name}`;
//     }
//     return '';
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     const error = validateField(name, value);
//     setErrors((prev) => ({ ...prev, [name]: error }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       const err = validateField(key, formData[key]);
//       if (err) newErrors[key] = err;
//     });

//     if (Object.keys(newErrors).length === 0) {
//       alert('Form submitted successfully!');
//       // Reset form if desired:
//       // setFormData({ name: '', email: '', phone: '', message: '' });
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className='container-fluid'>
//       <div className="container my-5">
//         <div className="row g-0 align-items-stretch">
//           {/* Left Section */}
//           <div className="col-md-6 bg-dark text-white d-flex flex-column justify-content-center p-5">
//             <small className="text-warning text-uppercase">Consultation</small>
//             <h2 className="mt-5">
//               <strong>SCHEDULE YOUR</strong><br />
//               <span className="text-warning">FREE CONSULTATION</span> <strong>TODAY</strong>
//             </h2>
//             <p className="mt-4">
//              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ipsa incidunt labore praesentium! Quod repudiandae voluptate soluta est dolores dicta. 
//             </p>
//             <div className="d-flex align-items-center mt-4">
//               <div className="border border-warning p-2 me-3">
//                 <MdPhone style={{ color: '#ffc107', fontSize: '1.2rem' }} />
//               </div>
//               <div>
//                 <h5 className="mb-0">45-1234-4444</h5>
//                 <small className="text-warning">Call us</small>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Form */}
//          <div className="col-md-6 p-5" style={{ backgroundColor: '#EBF2FA' }}>

//             <form noValidate onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="form-label">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className={`form-control ${errors.name ? 'is-invalid' : ''}`}
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 <div className="invalid-feedback">{errors.name}</div>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <div className="invalid-feedback">{errors.email}</div>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//                 <div className="invalid-feedback">{errors.phone}</div>
//               </div>

//               <div className="mb-4">
//                 <label className="form-label">Message</label>
//                 <textarea
//                   name="message"
//                   rows="4"
//                   className={`form-control ${errors.message ? 'is-invalid' : ''}`}
//                   value={formData.message}
//                   onChange={handleChange}
//                 ></textarea>
//                 <div className="invalid-feedback">{errors.message}</div>
//               </div>

//               <button type="submit" className="btn btn-warning text-white w-100 fw-semibold rounded-0">
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { MdPhone } from 'react-icons/md';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const regexRules = {
    name: /^[a-zA-Z\s]{3,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: /^.{10,500}$/
  };

  const validateField = (name, value) => {
    if (name === 'phone') {
      const phoneNumber = parsePhoneNumberFromString(value);
      if (!phoneNumber || !phoneNumber.isValid()) {
        return 'Invalid phone number';
      }
      return '';
    }

    if (!regexRules[name].test(value)) {
      return `Invalid ${name}`;
    }

    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
      // Reset form if desired:
      // setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='container-fluid'>
      <div className="container my-5">
        <div className="row g-0 align-items-stretch">
          {/* Left Section */}
          <div className="col-md-6 bg-dark text-white d-flex flex-column justify-content-center p-5">
            <small className="text-warning text-uppercase">Consultation</small>
            <h2 className="mt-5">
              <strong>SCHEDULE YOUR</strong><br />
              <span className="text-warning">FREE CONSULTATION</span> <strong>TODAY</strong>
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ipsa incidunt labore praesentium! Quod repudiandae voluptate soluta est dolores dicta.
            </p>
            <div className="d-flex align-items-center mt-4">
              <div className="border border-warning p-2 me-3">
                <MdPhone style={{ color: '#ffc107', fontSize: '1.2rem' }} />
              </div>
              <div>
                <h5 className="mb-0">+45 1234 4444</h5>
                <small className="text-warning">Call us</small>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="col-md-6 p-5" style={{ backgroundColor: '#EBF2FA' }}>
            <form noValidate onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.name}</div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.email}</div>
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  // placeholder="+1 415 123 4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.phone}</div>
                
              </div>

              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <div className="invalid-feedback">{errors.message}</div>
              </div>

              <button type="submit" className="btn btn-warning text-white w-100 fw-semibold rounded-0">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
