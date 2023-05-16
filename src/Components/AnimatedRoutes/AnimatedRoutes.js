import React from 'react'
import Home from '../../Pages/Home/Home';
import Music from '../../Pages/Music/Music';
import BrickbyBrick from '../../Pages/BrickbyBrick/BrickbyBrick';
import Plazma from '../../Pages/Plazma/Plazma';
import ShowStoreItems from '../../Pages/Store/ShowStoreItems/ShowStoreItems';
import StoreItemInfo from '../../Pages/Store/StoreItemInfo/StoreItemInfo';
import ShoppingCart from '../../Pages/ShoppingCart/ShoppingCart'
import { Routes, Route, useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {

  const location = useLocation();

  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
      fetch("https://api.punkapi.com/v2/beers?page=1&per_page=8")
      .then ((response) => {
        return response.json()
      }) .then((data) => {
            setStoreItems(data)
      })
  }, [])

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}  />
        <Route path="/music" element={<Music />} />
        <Route path="/brickbybrick" element={<BrickbyBrick/>} />
        <Route path="/plazma" element={<Plazma/>} />
        <Route path="/store/:id" element={<StoreItemInfo storeItems={storeItems}/>}/>
        <Route path="/store/*" element={<ShowStoreItems storeItems = {storeItems}/>}/>
        <Route path="/cart" element={<ShoppingCart/>}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes