import React from 'react'

const CategoryCard=(props)=>{
    function handleReadMore(){
        
    }
  return(
      <div className="category_card">
          <div className="card">
              <div className="image_section">
                  <img src={props.img} />
              </div>
              <div className="details_section">
                  <div className="category_name">
                     <p>{props.name}</p>
                  </div>
                  <div className="category_description">
                      <span>
                          {props.description}
                      </span>
                  </div>
                  <div className="read">
                      <p onClick={handleReadMore}>Read More</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CategoryCard;