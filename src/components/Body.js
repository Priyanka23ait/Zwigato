import React, { useState, useEffect} from 'react';
import {resList} from '../utils/mockData.js'
import RestaurantCard, {RestaurantCardWithVeg} from './RestaurantCard.js'
import SortIcon from '@mui/icons-material/Sort';
import Shimmer from './Shimmer.js';
import {Link} from 'react-router-dom';
import {RESTAURANTS_URL} from '../utils/Constant.js';
import useOnlineStatus from '../utils/useOnlineStatus.js';

const Body=()=>{
    let [restaurantList, setRestaurantList] = useState([]); 
    let [searchText, setSearchText] = useState("");   
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    // const handleSearch = () => {
    //     let filtered = resList.filter((restaurant) => restaurant.info.avgRating >= 4.4);
    //   console.log(filtered);
    //   setfilteredRestaurants(filtered);
    // };

    useEffect(()=>{
        console.log("useEffect called");
        fetchData();

    }, []);

    //Approach[1]
    // const fetchData = ()=>{
    //     const data = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     data.then((response)=>{ 
    //         response.json().then((json)=>{;
    //         console.log(response);})           

    //     });
        
    // }
//Approach[2] async  await will resolve the promise
const RestaurantWithVegLabel = RestaurantCardWithVeg(RestaurantCard);    
const fetchData = async ()=>{
        const data = await fetch(RESTAURANTS_URL);
        const json = await data.json();
        console.log("Fetched Data:", json);
        console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        var resList = json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setRestaurantList(resList)
        setfilteredRestaurants(resList);
        
    }
    
    const handleSearch = () =>{
       
        let searchResults = restaurantList.filter((res)=>{
          return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        });
        setfilteredRestaurants(searchResults);
        console.log(searchResults);
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {return <h1>
    You are offline.. Please check your internet connection!
    </h1>}
    if (restaurantList.length ===0) { return <Shimmer/>; }    
    return (
    <div>
        <div className="filter-search-container">
        <div className='search-container '>
            <div className='px-12 py-1 search-input'>
                <input type='text' 
                placeholder='Search for restaurants'
                 value={searchText} 
                 onChange={(e) => setSearchText(e.target.value)}
                />
                <button className='bg-blue-400 shadow-blue-500 rounded-lg text-white px-4 py-1 hover:bg-blue-600 focus:ring-2' onClick={()=>{handleSearch()}} > Search</button>
            </div>

        </div>

        <div className='filter-btn'>
            <SortIcon className='sort-filter' onClick={()=>
                {
                    let filterRes= restaurantList.filter((restaurant) => restaurant.info.avgRating >= 4.4);
                    setRestaurantList(filterRes);
                }
                }>

            </SortIcon>
        </div>
       </div>
        <div className='restaurant-container px-8 py-4 '>
            {
            filteredRestaurants.map((restaurant)=>(
                console.log(restaurant),
                <Link to={'/restaurant/'+ restaurant.info.id} key={restaurant.info.id} >
                    { (restaurant.info.veg != undefined && restaurant.info.veg === true)?
                <RestaurantWithVegLabel  RestauranctCard={RestaurantCard} resObj={restaurant}/> : <RestaurantCard  resObj={restaurant}/>}
               
               </Link>
            ))
            }
        
        </div>
      
    </div>)
}
export default Body;
