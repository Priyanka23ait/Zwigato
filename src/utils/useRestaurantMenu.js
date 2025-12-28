import { useEffect, useState } from 'react';
import { RESTAURANTS_URL,RESTAURANT_MENU_URL } from '../utils/Constant.js';

// Custom hook to fetch restaurant data.
// Returns an object: { data, loading, error }
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resId);

  useEffect(() => {
    console.log("useEffect called");
    fetchMenu();
  },[resId]);

    
    const fetchMenu = async () => {
      console.log('useRestaurantMenu: fetching ->', RESTAURANT_MENU_URL +resId);
      
      try {
        console.log(RESTAURANT_MENU_URL+"/"+resId);
        const res = await fetch(RESTAURANT_MENU_URL+resId);
        
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        // console.log("item details");
        // console.log(json.data?.card?.card?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        // console.log(json.data?.card?.card?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] == "ItemCategory"));
        
         setResInfo(json);
        console.log('useRestaurantMenu: fetched data' , json);
      } catch (err) {
           console.error('useRestaurantMenu fetch error', err);
      }
      
    };

  
return resInfo;
  
};

export default useRestaurantMenu;
