import "./StoreItemInfo.css";

const StoreItemInfo = (props) => {

    const {storeItem, shoppingCartArr, setShoppingCartArr} = props;

    const pushToCartArr = () => {
        setShoppingCartArr(shoppingCartArr => [...shoppingCartArr, storeItem])
    }

    return (
        <div className="item-info-container">
            <div className="store-item-info-image-container">
                <img className="store-item-info-image" src={storeItem.image_url} alt={storeItem.name} />
            </div>
            <div className="store-item-text-container">
                <h1 className="store-item-info-name">{storeItem.name}</h1>
                <p className="store-item-info-description">{storeItem.description}</p>
                <p className="store-item-info-price">Price: {storeItem.price}</p>
                <button className="add-button" onClick={pushToCartArr}>{shoppingCartArr.includes(storeItem) ? 'Item in cart! Add more?' : 'Add to cart'}</button>
            </div>
        </div>
    )
}

export default StoreItemInfo;