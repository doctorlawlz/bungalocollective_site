import "./StoreItemInfo.css";
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const StoreItemInfo = (props) => {
    
    const {id} = useParams();

    const {storeItems} = props;

    const [storeItem, setStoreItem] = useState('')

    useEffect(() => {
        for (let i = 0; i < storeItems.length; i ++) {
            if (storeItems[i].id = id) {
                setStoreItem(storeItems[i])
            }
        }
    })

    if (storeItem.length == '' ) {
        return(
            <p>Loading...</p>
        )
    }

    return (
        <div>
            <div className="item-info-container">
            <img className="store-item-info-image" src={storeItem.image_url} alt={storeItem.name} />
                <div className="store-item-text-container">
                    <h1 className="store-item-info-name">{storeItem.name}</h1>
                    <p className="store-item-info-description">{storeItem.description}</p>
                    <p className="store-item-info-price">Price: {storeItem.price}</p>
                </div>
            </div>
        </div>
        
    )
}

export default StoreItemInfo;