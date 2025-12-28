import React, {useState} from 'react';
import ItemList from './ItemList.js';

const RestaurantCategory = ({ category, isExpanded, setShowCategoryIndex }) => {
    //console.log("Category in RestaurantCategory ", category);
    var items = category.itemCards;
    console.log("isExpanded prop in RestaurantCategory ", isExpanded);
    //console.log("Items in RestaurantCategory ", items);
    //const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        console.log("RestaurantCategory - Clicked on category: ", category.title);
        //setIsExpanded(!isExpanded);
        setShowCategoryIndex(); // from props
    };

    return (
        <div>
            <div className="shadow-md shadow-blue-300 bg-emerald-100  my-2 flex justify-between cursor-pointer" onClick={handleClick}  >            
                <span className="font-bold text-lg text-blue-950 my-1 mx-4">
                    {category.title}  ({category.itemCards.length})
                </span>
                <span className="mx-4 my-1"> ⬇</span>            
            </div>

          {isExpanded  && (
            <div className="category-items">
                <ItemList items={items}/>
             </div>
        )}
       
    </div>
      

    )
}

export default RestaurantCategory;