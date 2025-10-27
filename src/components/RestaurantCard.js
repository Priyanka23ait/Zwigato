import React from "react"
import ReactDOM from "react-dom/client"



const RestaurantCard = ({resObj}) =>{
    return (
    <div className="res-card">
                
    
        <img className="res-image" 
             src ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
                + resObj.info.cloudinaryImageId} />
        <h3>{resObj.info.name} </h3>
        <p>{resObj.info.cuisines + "," }</p>
        <p>{resObj.info.costForTwo}</p>
        
        <p>{resObj.info.avgRating}</p>
                
   
        
    </div>
    )
}

export default RestaurantCard;