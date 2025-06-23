import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-warning rounded-circle"
      style={{
        position: 'fixed', // THIS is the key change
        bottom: '30px',
        right: '30px',
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        zIndex: 9999,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      }}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short" style={{ fontSize: '1.5rem' }}></i>
    </button>
  );
}
