import './ShoppingCart.css';
import { Link } from 'react-router-dom';


const ShoppingCart = (props) => {

    const {shoppingCartArr, setShoppingCartArr} = props;

    const removeFromCart = (e) => {
        const itemId = e.target.getAttribute('id')
        setShoppingCartArr(shoppingCartArr.filter(item => item.id != itemId))
    }

    const mappedShoppingCartItems = shoppingCartArr.map((cartItem) => {
        return(
            <div className="cart-item-container">
                <Link to={`/store/${cartItem.id}`}>
                    <img className="cart-item-image" src={cartItem.image_url} alt={cartItem.name}></img>
                </Link>
                <div className="cart-item-text">
                    <h3 className="cart-item-name">{cartItem.name}</h3>
                    <h4 className="cart-item-quantity">Quantity: </h4>
                    <h4 className="cart-item-price">Price:</h4>
                    <button className="remove-button" onClick={removeFromCart}>Remove from cart</button>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1 className="shopping-cart-header">Your Shopping Cart</h1>
            {shoppingCartArr.length < 1 ? <h3 className="empty-cart-message">Ruh Roh, your shopping cart is empty!</h3> : ''}
            <div className="map-cart-items">
                {mappedShoppingCartItems}
            </div>
        </div>
    )
}

export default ShoppingCart;