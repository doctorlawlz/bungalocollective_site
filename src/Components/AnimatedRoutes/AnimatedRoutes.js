import React from 'react'
import Home from '../../Pages/Home/Home';
import Music from '../../Pages/Music/Music';
import BrickbyBrick from '../../Pages/BrickbyBrick/BrickbyBrick';
import Plazma from '../../Pages/Plazma/Plazma';
import ShowStoreItems from '../../Pages/Store/ShowStoreItems/ShowStoreItems';
import StoreItemInfo from '../../Pages/Store/StoreItemInfo/StoreItemInfo';
import ShoppingCart from '../../Pages/ShoppingCart/ShoppingCart'
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes(props) {

  const {storeItems, shoppingCartArr, setShoppingCartArr} = props;

  const location = useLocation();

  const renderItemInfo = storeItems.map((item) => {
    return(
      <Route path={`/store/${item.id}`} element={<StoreItemInfo
          shoppingCartArr={shoppingCartArr}
          setShoppingCartArr={setShoppingCartArr}
          storeItem={item}/>}>
      </Route>
    )
  })

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}  />
        <Route path="/music" element={<Music />} />
        <Route path="/brickbybrick" element={<BrickbyBrick/>} />
        <Route path="/plazma" element={<Plazma/>} />
        {renderItemInfo}
        <Route path="/store/*" element={<ShowStoreItems storeItems = {storeItems}/>}/>
        <Route path="/cart" element={<ShoppingCart
          shoppingCartArr={shoppingCartArr}
          setShoppingCartArr={setShoppingCartArr}/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes