import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu.js'; 
import RestaurantCategory from './RestaurantCategory.js';

const RestaurantMenu = () => {
    const [showCategoryIndex, setShowCategoryIndex] = useState(0);
    const paramResId = useParams();
    console.log("Param Res Id ", paramResId.resid);

    const resData= useRestaurantMenu(paramResId.resid);

    console.log('ResInfo from custom hook:', {resData});
     
    if(resData === null || resData === undefined) {
        return <Shimmer/>;
    }
    
    
    const resInfo = resData?.data?.card?.card?.info;
    console.log("Res Info " + resInfo);

    const resItemCategoryCards = resData.data?.card?.card?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] == "ItemCategory");

    console.log("Res Item category " + resItemCategoryCards);
    
    if (!resInfo) return <div className="menu-container">Restaurant not found</div>;

    const { name, cuisines, costForTwo, avgRating } = resInfo;

    return (
        <div className="text-center  my-4 w-3/5 mx-auto border-black">
            <h1 className='font-bold text-lg'>{name}</h1>
             <h4 className='text'>{avgRating} * {costForTwo}</h4>
              <div >
                
                {cuisines && cuisines.map((cuisine, idx) => (
                   
                         <span key={idx}>{cuisine + ", "}</span>
                         
                   
                 ))}
            </div> 

        

        <div className="item-category-header">
                 {
                resItemCategoryCards.map((category, index) => {
                    //THIS IS CALLED CONTROLLED COMPONENT
                    return <RestaurantCategory key={category.card.card.title}
                    category={category.card.card} 
                    isExpanded={index===showCategoryIndex ? true:false}
                    setShowCategoryIndex={() => setShowCategoryIndex(index)}
                    />;
                })
                    
                 }
        </div>

      
       
    
       </div>
    );
};

export default RestaurantMenu;