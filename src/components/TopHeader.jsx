import { MdEmail, MdPhone } from 'react-icons/md';
export default function TopHeader() {
  return (
    <div className="bg-[#11161E] text-white text-sm px-6 py-2 hidden md:flex justify-end gap-8">
      <div className="flex items-center gap-2">
        <span className="text-yellow-500 text-base"><MdEmail className="text-yellow-500" /></span> {/* Changed icon + yellow */}
        <a href="mailto:info@stepherd.com" className="hover:underline">
          info@stepherd.com
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-yellow-500 text-base"><MdPhone className="text-yellow-500" /></span> {/* Yellow phone icon */}
        <a href="tel:0212232222" className="hover:underline">
          021-223-2222
        </a>
      </div>
    </div>
  );
}

