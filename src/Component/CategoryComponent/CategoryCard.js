import React from 'react'
import {useHistory} from 'react-router-dom'


const CategoryCard=({img,name,id,bg,setCategory,setWhich})=>{
  
  let history=useHistory()

  function handleCuisineCard(e){
    setCategory(e.currentTarget.id)
    setWhich('category')
    history.push('/receipelist')
    
  }
  return(
    <div className={bg} id={id} onClick={handleCuisineCard}>
       <div className="cuisine_img flex_full">
        <img src={img} />
       </div>
       <div className="cuisine_name">
         <p>{name}</p>
       </div>
    </div>
  )
}
export default CategoryCard;