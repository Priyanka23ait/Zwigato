const ItemList = ({ items }) => {
return(<div>

    {items.map((itemCard) => {
                    return (
                    <div key={itemCard.card.info.id} className="flex border-b-2 border-gray-200 p-2 m-2 shadow-md shadow-blue-200">
                        {<img src={itemCard.card.info.imageId} className="w-22 h-20 mx-4 right"/> }
                        <div className="absolute">
                            <button className="bg-blue-500 text-white text rounded-md mx-10 my-16" > Add + </button>
                            </div>
                        <div className="text-left ">
                            <span>{itemCard.card.info.name}</span>
                            <span> - ₹{itemCard.card.info.price ? itemCard.card.info.price/100 : itemCard.card.info.defaultPrice/100 }</span>
                            <p className="text-xs text-left">{itemCard.card.info.description}</p>
                        </div>
                        
                        
                        
                    </div>)
                })}
</div>)

}

export default ItemList;