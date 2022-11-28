import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import {AnimatePresence} from "framer-motion"
import About from './pages/About';
import Project from './pages/Project';

function App() {

  return (
    <div className="App">
      <Router>
        <AnimatePresence initial={true} mode={"wait"}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  )
}

export default App
