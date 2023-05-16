import "./StoreItemInfo.css";

const StoreItemInfo = (props) => {

    const {storeItem} = props;

    console.log(storeItem)


    return (
        <div>
            {/* <h1>{storeItem.name}</h1> */}
            {/* <img src={storeItem.image_url} alt={storeItem.name} />
            <p>{storeItem.description}</p>
            <p>Price: {storeItem.price}</p> */}
        </div>
    )
}

export default StoreItemInfo;