import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] text-white px-6 py-10">
      <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo + Description */}
        <div>
          <img src={logo} alt="Logo" className="h-10 mb-4 mx-auto md:mx-0" />
          <p>
            Ramsha, Romania, Shepherd & Foundation Lorem ipsum reprehenderit eius temporibus omnis nesciunt odit, necessitatibus in quae delectus.
          </p>
          <p className="mt-2 text-yellow-400 text-sm">Medicines, Parmercy, Hospital</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-yellow-500 mb-2">QUICK LINK</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Facts/Information</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold text-yellow-500 mb-2">HELP</h3>
          <p>Email: <br /><span className="text-sm">admin@stepherd.com</span></p>
          <p className="mt-2">Phone: <br /><span className="text-sm">021-223-2222</span></p>
          <p className="mt-2">ABN: <br /><span className="text-sm">22 542 221 222</span></p>
        </div>

        {/* Locations */}
        <div>
          <h3 className="font-semibold text-yellow-500 mb-2">LOCATIONS</h3>
          <p className="text-sm">No 186, Kili town,<br />A9 Road, Kilinochchi</p>
          <p className="mt-2 text-sm">Stepan road Kilinochchi, 44000</p>
          <p className="mt-2 text-sm">PO Box 44000, NBM</p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm border-t pt-4 border-gray-700">
        © Copyright <span className="text-yellow-500">Ramsha, Romania, Shepherd & Foundation.</span> All Rights Reserved.
      </div>
    </footer>
  );
}
