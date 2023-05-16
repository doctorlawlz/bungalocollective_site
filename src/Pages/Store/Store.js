import React from 'react';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoreItemInfo from './StoreItemInfo/StoreItemInfo'
import ShowStoreItems from './ShowStoreItems/ShowStoreItems';
  
const Merch = () => {

  const [storeItems, setStoreItems] = useState([]);

  const getItems = () => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=8")
    .then ((response) => {
      return response.json()
    }) .then((data) => {
          setStoreItems(data)
    })}

  useEffect(getItems, [])

  const renderItemInfo = storeItems.map((storeItem) => {
    console.log(storeItem)
        return( 
          <Route path={`/store/${storeItem.id}`} 
            element={<StoreItemInfo 
            storeItem = {storeItem}
            id={storeItem.id}
            />}></Route>
        )
  });

  return (
    <div>
      <h1 className="store-header">Welcome to da store</h1>
      {storeItems.length > 0 && <Routes>
        {renderItemInfo}
      </Routes>}
      {storeItems.length > 0 && <ShowStoreItems storeItems={storeItems}/>}
    </div>
  );
};
  
export default Merch;