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
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45px',
        height: '45px',
        zIndex: 10,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      }}
    >
      <i className="bi bi-arrow-up-short" style={{ fontSize: '1.5rem' }}></i>
    </button>
  );
}
