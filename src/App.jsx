import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Education from './sections/Education/Education';
import Contact from './sections/Contact/Contact';
import More from './sections/More/More';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/Portfolio" element={<Home />} />
            <Route path="/Portfolio/about" element={<About />} />
            <Route path="/Portfolio/skills" element={<Skills />} />
            <Route path="/Portfolio/projects" element={<Projects />} />
            <Route path="/Portfolio/education" element={<Education />} />
            <Route path="/Portfolio/contact" element={<Contact />} />
            <Route path="/Portfolio/more" element={<More />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;