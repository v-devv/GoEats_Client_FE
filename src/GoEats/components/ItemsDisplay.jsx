import React , {useState} from 'react'
import { itemData } from '../data'

const ItemsDisplay = () => {
    const [displayItem , setDisplayItem] = useState(itemData);
    console.log(displayItem)
  return (
    <div>
        <div className="itemSection">
            {displayItem.map((item , key )=>{
                return (
                    <div className="gallery" key={key}>
                        <img src={item.itemImg} alt={item.name} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ItemsDisplay