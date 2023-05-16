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
            <div>
                <Link to={`/store/${cartItem.id}`}>
                    <img src={cartItem.image_url} alt={cartItem.name}></img>
                </Link>
                <h2>{cartItem.name}</h2>
                <h3>Quantity: </h3>
                <button onClick={removeFromCart}>Remove from cart</button>
            </div>
        )
    })

    return (
        <div>
            {mappedShoppingCartItems}
        </div>
    )
}

export default ShoppingCart;