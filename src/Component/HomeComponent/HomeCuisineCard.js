import React from 'react'
import {useHistory} from 'react-router-dom'


const HomeCuisineCard=({img,name,id,bg,setCuisine,setWhich})=>{
  
  let history=useHistory()

  function handleCuisineCard(e){
    setCuisine(e.currentTarget.id)
    setWhich('cuisine')
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
export default HomeCuisineCard;