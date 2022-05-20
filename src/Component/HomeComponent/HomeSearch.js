import React from 'react'

const HomeSearch=({id,placeholder})=>{
   return(
       <div className="homeSearch flex_full">
           <div className="homeSearchSection">
              <input placeholder={placeholder} />
           </div>
           <div className="homeSearchButton flex_full">
              <img src="docs/img/icons/search_button.png" />
           </div>
       </div>    
   )
}
export default HomeSearch