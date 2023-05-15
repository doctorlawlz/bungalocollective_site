import React from 'react'
import Home from '../../Pages/Home/Home';
import Music from '../../Pages/Music/Music';
import BrickbyBrick from '../../Pages/BrickbyBrick/BrickbyBrick';
import Plazma from '../../Pages/Plazma/Plazma';
import Store from '../../Pages/Store/Store';
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
        <Route path="plazma" element={<Plazma/>} />
        <Route path="store" element={<Store/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes