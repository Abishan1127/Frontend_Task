import React, { useEffect, useState } from 'react';
import im1 from '../assets/images/hero4.jpg';

const slides = [
  {
    heading: 'Setting your Future\nwith medicine\nand Care',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem debitis magni earum, amet illum natus facere, cupiditate nesciunt iure officiis recusandae repellendus illo ipsum dolores itaque ex temporibus rerum.',
    button: 'LEARN MORE'
  },
  {
    heading: 'Your strenth & Health\nOur Mission in world\nTrusted Always',
    paragraph: 'Compassionate care, advanced technology, and a team dedicated to your wellness and recovery.',
    button: 'LEARN MORE'
  },
  {
    heading: 'Innovation in medical\nHealthcare is must\nStarts Here',
    paragraph: 'Discover how we’re redefining patient care through modern medical practices and research.',
    button: 'LEARN MORE'
  }
];

export default function HerotextCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  return (
    <div className="container-fluid p-0">
      <div
        className="min-vh-100 d-flex align-items-center text-white px-3 px-md-5"
        style={{
          backgroundImage: `url(${im1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <div className="container">
          <div className="col-md-8">
            <h1 className="display-4 fw-bold lh-1" style={{ whiteSpace: 'pre-line' }}>
              {currentSlide.heading}
            </h1>
            <p className="lead mt-3">
              {currentSlide.paragraph}
            </p>
            <a href="#contact" className="btn btn-warning text-black fw-semibold mt-4 rounded-0">
              {currentSlide.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
