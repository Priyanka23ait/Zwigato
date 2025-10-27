import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import {RESTAURANTS_URL} from '../utils/Constant.js';  

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const paramResId = useParams();

    useEffect(() => {
        fetchMenu();
        console.log("Restaurant Menu useEffect");
    }, [paramResId.resid]);

    async function fetchMenu() {
        const data = await fetch(RESTAURANTS_URL);
        const json = await data.json();
        console.log(json.data);
        const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        const restaurant = restaurants.find(res => res.info.id === paramResId.resid);
        setResInfo(restaurant ? restaurant.info : null);
        console.log(restaurant ? restaurant.info : null);
    }

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwo, avgRating } = resInfo;

    return (
        <div className='menu-container'>
            <h1>{name}</h1>
            <h4>{avgRating} * {costForTwo}</h4>
            <h3>Choose as per your taste</h3>
            <div className='cuisine-list'>
                
                {cuisines && cuisines.map((cuisine, idx) => (
                    <div className="cuisine-list" key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0 8px 8px'  }}>
                        <span>{cuisine}</span>
                        <button style={{ marginLeft: '12px', marginRight:'8px', padding: "8px 8px 8px 8px" }}>Add</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;