import React from "react"
import ReactDOM from "react-dom/client"



const RestaurantCard = ({resObj}) =>{
    return (
    <div className="res-card m-16 hover:shadow-md hover:shadow-cyan-400">
                
    
        <img className="res-image" 
             src ={ resObj.info.cloudinaryImageId} />
        <h3 className="text-black-90 font-bold ">{resObj.info.name} </h3>
        <p className="">{resObj.info.cuisines + "," }</p>
        <p className="">{resObj.info.costForTwo}</p>
        
        <p className="">{resObj.info.avgRating}</p>
                
   
        
    </div>
    )
}

export const RestaurantCardWithVeg = (RestauranctCard) =>{
    return (props)=>{
        return(
            <div className="res-card-veg ">
            <label className="bg-green-950 text-green-100 absolute">Pure Veg 🌿</label>
            <RestauranctCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;