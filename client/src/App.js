import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurTeam from './components/OurTeam';
import Home from './components/Home';
import Notice from './components/Notice';
import Course from './components/Course';
function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/Notice" element={<Notice />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
