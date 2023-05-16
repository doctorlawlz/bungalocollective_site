import './ShoppingCart.css';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';


const ShoppingCart = (props) => {

    const {shoppingCartArr, setShoppingCartArr} = props;

    const [cartItemCount, setCartItemCount] = useState({});
    const [shoppingCartSet, setShoppingCartSet] = useState();
    const [cartDisplayItems, setCartDisplayItems] = useState([])

    const removeFromCart = (e) => {
        const itemId = e.target.value
        setShoppingCartArr(shoppingCartArr.filter(item => item.id != itemId))
    }

    const removeAllFromCart = () => {
        setShoppingCartArr([])
    }

    const countNumberOfEachCartItem = () => {
        const tempMap = {}
        for(let i = 0; i < shoppingCartArr.length; i ++) {
            const curItemId = shoppingCartArr[i].id
            if (curItemId in tempMap) {
                tempMap[curItemId] += 1
            } else {
                tempMap[curItemId] = 1
            }
        }
        setCartItemCount(tempMap)
    }

    useEffect(countNumberOfEachCartItem, [shoppingCartArr])

    const displayUniqueItems = () => {
        const tempArr = []
        for (let i = 0; i < shoppingCartArr.length; i ++) {
            if (!tempArr.includes(shoppingCartArr[i])) {
                tempArr.push(shoppingCartArr[i])
            } else {
                continue
            }
        }
        setCartDisplayItems(tempArr)
    }

    useEffect(displayUniqueItems, [shoppingCartArr])

    const mappedShoppingCartItems = cartDisplayItems.map((cartItem) => {
        return(
            <div className="cart-item-container">
                <Link to={`/store/${cartItem.id}`}>
                    <img className="cart-item-image" src={cartItem.image_url} alt={cartItem.name}></img>
                </Link>
                <div className="cart-item-text">
                    <h3 className="cart-item-name">{cartItem.name}</h3>
                    <h4 className="cart-item-quantity">Quantity: {cartItemCount[cartItem.id]}</h4>
                    <h4 className="cart-item-price">Price:</h4>
                    <button className="button" value={cartItem.id} onClick={removeFromCart}>Remove</button>
                </div>
            </div>
        )
    })

    

    return (
        <div>
            <h1 className="shopping-cart-header">Your Shopping Cart</h1>
            <div className="remove-all-button-container">
                {shoppingCartArr.length > 1 ? <button className="button" onClick={removeAllFromCart}>Remove All Items</button>: ''}
            </div>
            {shoppingCartArr.length < 1 ? <h3 className="empty-cart-message">Ruh Roh, your shopping cart is empty!</h3> : ''}
            <div className="map-cart-items">
                {mappedShoppingCartItems}
            </div>
        </div>
    )
}

export default ShoppingCart;