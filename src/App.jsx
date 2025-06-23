import React from 'react';
import Home from './pages/Home';
import ScrollButton from './components/ScrollButton'; // ✅ Add this line
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <Home />
      <ScrollButton /> {/* ✅ This is now fixed globally */}
    </>
  );
}

export default App;
