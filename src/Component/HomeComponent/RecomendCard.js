import React from 'react'
import {useHistory} from 'react-router-dom'
const RecomendCard=({id,img,name,setReceipeId,setReceipeBack})=>{
    let history=useHistory()

    function handleRecomend(e){
        setReceipeId(e.currentTarget.id)
        setReceipeBack('home')
        history.push('/receipe')
    }
    return(
        <div className="recomendation_card_unit" id={id} onClick={handleRecomend}>
            <div className="recomendation_card">
                <img src={img} />
                <div className="dish_name">
                    <p>{name}</p>
                </div>
           </div>
       </div>
    )
}

export default RecomendCard;