import React from 'react'
import Home from '../Pages/Home';
import Music from '../Pages/Music';
import BrickbyBrick from '../Pages/BrickbyBrick'
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}  />
        <Route path="/music" element={<Music />} />
        <Route path="brickbybrick" element={<BrickbyBrick/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes