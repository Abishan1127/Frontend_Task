import { MdEmail, MdPhone } from 'react-icons/md';

export default function TopHeader() {
  return (
    <div
      className="d-none d-md-flex justify-content-end px-4 py-2"
      style={{ backgroundColor: '#11161E' }}
    >
      <div
        className="d-flex align-items-center px-4 py-2 rounded me-3 gap-5 "
        style={{backgroundColor: '#11161E'}}
      >
        {/* Email Box */}
        <div className="d-flex align-items-center me-5 gap-3" >
          <div
            className="d-flex justify-content-center align-items-center rounded"
            style={{
              width: '38px',
              height: '38px',
              backgroundColor: '#1A1F2B',
            }}
          >
            <MdEmail style={{ color: '#ffc107', fontSize: '1.2rem' }} />
          </div>
          <div className="d-flex flex-column lh-sm">
            <small style={{ color: '#ccc' }}>Email to us</small>
            <a
              href="mailto:info@stepherd.com"
              className="fw-bold text-white text-decoration-none"
            >
              info@stepherd.com
            </a>
          </div>
        </div>

        {/* Phone Box with spacing from Email Box */}
        <div
          className="d-flex align-items-center me-5 gap-3"
        >
          <div
            className="d-flex justify-content-center align-items-center rounded"
            style={{
              width: '38px',
              height: '38px',
              backgroundColor: '#1A1F2B',
            }}
          >
            <MdPhone style={{ color: '#ffc107', fontSize: '1.2rem' }} />
          </div>
          <div className="d-flex flex-column lh-sm">
            <small style={{ color: '#ccc' }}>Talk to us</small>
            <a
              href="tel:0212232222"
              className="fw-bold text-white text-decoration-none"
            >
              021-223-2222
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
