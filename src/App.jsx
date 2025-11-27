import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css'; // You can remove this if you move the .section-title class to index.css

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
      <div className="min-h-screen bg-[var(--background-color)] bg-[image:radial-gradient(circle_at_50%_0%,rgba(40,50,80,0.4),transparent_50%),radial-gradient(var(--dot-color)_1px,transparent_1px)] bg-[length:100%_100%,20px_20px]">
        <Navbar />
        <main className="max-w-[1100px] mx-auto px-8">
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