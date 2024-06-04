import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Home from './Home';
import FarmerKit from './FarmerKit';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap Routes around Route */}
          <Route path="/" element={<Home />} />
          <Route path="/Farm" element={<FarmerKit />} /> {/* Use element prop to render the component */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
