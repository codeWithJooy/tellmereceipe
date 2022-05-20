import React from 'react'
import {useHistory} from 'react-router-dom'

const ListCard=({img,title,likes,id,setReceipeId,setReceipeBack,which})=>{
  let history=useHistory()

  function handleClick(e){
      const id=e.currentTarget.id
      setReceipeId(id)
      which==='cuisine'?setReceipeBack('home'):setReceipeBack('category')
      history.push('/receipe')
  }  
  return(
    <div className="list_card" id={id} onClick={handleClick}>
        <div className="list_image">
            <img src={img} />
        </div>
        <div className="list_title">
            <p>{title}</p>
        </div>
        <div className="list_metadata flex_full">
            <div className="list_like">
                <img src="docs/img/icons/like.png" />
                <p>{likes}</p>
            </div>
            <div className="list_bookmark">
                <img src="docs/img/icons/bookmark.png" />
            </div>
        </div>
    </div>
  )
}
export default ListCard;