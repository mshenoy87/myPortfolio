import './App.css';
import './style.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactForm from "./pages/Contact";
import Resume from './pages/Resume';
import Projects from './pages/Projects';

import React, { useState } from "react";

function App() {

  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <div className="App">
      <div class="container">
        <div class="glass-container rounded-4">
          <nav class="navbar nav navbar-expand-md">
            <button type="button" title="button" class="btn btn-outline-light white btn-lg navbar-toggler" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars white"></i>            
            </button>
            <div class="navbar-collapse collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li class="nav-link">
                        <a href="#/">Home</a>
                    </li>
                    <li class="nav-link">
                        <a href="#/projects">Projects</a>
                    </li>
                    <li class="nav-link">
                        <a href="#/resume">Resume</a>
                    </li>
                    <li class="nav-link">
                        <a href="#/contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </Router>

        </div>
      </div>
    </div>
  );
}

export default App;
