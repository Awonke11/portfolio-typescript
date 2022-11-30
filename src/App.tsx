import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import {AnimatePresence} from "framer-motion"
import About from './pages/About';
import Project from './pages/Project';
import Algorithm from './pages/Algorithm';

function App() {

  return (
    <div className="App">
      <Router>
        <AnimatePresence initial={true} mode={"wait"}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/algorithm" element={<Algorithm />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  )
}

export default App
