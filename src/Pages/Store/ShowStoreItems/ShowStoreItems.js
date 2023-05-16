import {Link} from 'react-router-dom';
import "../Store.css"

const ShowStoreItems = (props) => {
    const {storeItems} = props;

    const storeItemList = storeItems.map((storeItem) => {
        return(
            <Link to={`/store/${storeItem.id}`} className="store-item-container">
                <h1 className="store-item-name">{storeItem.name}</h1>
                <img className="store-item-image" src={storeItem.image_url} alt={storeItem.name}/>
            </Link>
        )
    })

    return(
        <div>
            <h1 className="store-header">Welcome to da store</h1>
            <div className="map-store-item">
                {storeItemList}
            </div>
        </div>
    )
}

export default ShowStoreItems;