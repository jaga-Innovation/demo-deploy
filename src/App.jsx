import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Lazy load the components
// const Home = lazy(() => import('./components/Home'));
// const About = lazy(() => import('./components/About'));

import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/* </Suspense> */}
    </Router>
  );
};

export default App;
