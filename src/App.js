import './App.css';
import React from 'react';
import mainLogo from './Site_Assets/GIFS/logo-bungalo-drawn-white.gif';
import BBBLogo from './Site_Assets/logo-bungalo-brickbybrick.svg'
import plazmaLogo from './Site_Assets/PNGS/logo-plazma.png'
import AnimatedRoutes from './Components/AnimatedRoutes/AnimatedRoutes';
import { Link, useLocation} from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const App = () => {

  const [storeItems, setStoreItems] = useState([]);
  const [shoppingCartArr, setShoppingCartArr] = useState([]);

  const location = useLocation();

  const backgroundClass = location.pathname === '/plazma'
    ? 'background-plazma'
    : location.pathname === '/brickbybrick' 
      ? 'background-brickbybrick' 
      : 'background-plazma'; /* change this to custom home background later */

  const logo = location.pathname === '/plazma' 
    ? plazmaLogo
    : location.pathname === '/brickbybrick'
      ? BBBLogo
      : mainLogo
    
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=8")
      .then ((response) => {
        return response.json()
      }) .then((data) => {
            setStoreItems(data)
          })
  }, [])

  return (
    <main>
        <motion.div 
          className={backgroundClass}
          
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}

        ></motion.div>
        <Link to="/">
          <img src={logo} className='logo color-overlay' alt='logo'></img>
        </Link>
        <div className="merch-button-container">
          <Link to="/cart"><button className="merch-button">da shopping cart</button></Link>
          <Link to="/store"><button className="merch-button">da store</button></Link>
        </div>
        <AnimatedRoutes 
          storeItems={storeItems}
          shoppingCartArr={shoppingCartArr}
          setShoppingCartArr={setShoppingCartArr}/>
    </main> 
  );
}

export default App;
