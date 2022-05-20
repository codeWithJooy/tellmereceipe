import React from 'react'

const IngredientUnit=({ingre_img,ingre_name,ingre_quantity})=>{
   return(
    <div className="ingredients_unit">
        <div className="ingre_image">
            <img src={ingre_img} />
        </div>
        <div className="ingre_name">
            <p>{ingre_name}</p>
        </div>
        <div className="ingre_quantity flex_full">
            <p>{ingre_quantity}</p>
        </div>
    </div>
   )
}

export default IngredientUnit