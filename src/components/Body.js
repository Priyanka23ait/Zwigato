import React, { useState, useEffect} from 'react';
import {resList} from '../utils/mockData.js'
import RestaurantCard from './RestaurantCard.js'
import SortIcon from '@mui/icons-material/Sort';
import Shimmer from './Shimmer.js';
import {Link} from 'react-router-dom';
import {RESTAURANTS_URL} from '../utils/Constant.js';

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
     const fetchData = async ()=>{
        const data = await fetch(RESTAURANTS_URL);
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        var resList = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
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

    if (restaurantList.length ===0) { return <Shimmer/>; }    
    return (
    <div>
        <div className="filter-search-container">
        <div className='search-container'>
            <div className='search-input'>
                <input type='text' 
                placeholder='Search for restaurants'
                 value={searchText} 
                 onChange={(e) => setSearchText(e.target.value)}
                />
                <button className='search-btn' onClick={()=>{handleSearch()}} > Search</button>
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
        <div className='restaurant-container'>
            {
            filteredRestaurants.map((restaurant)=>(
                <Link to={'/restaurant/'+ restaurant.info.id} key={restaurant.info.id} >
               <RestaurantCard  resObj={restaurant}/>
               </Link>
            ))
            }
        
        </div>
      
    </div>)
}
export default Body;
