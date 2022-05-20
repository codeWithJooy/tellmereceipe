import React from 'react'
import {useHistory} from 'react-router-dom'
const Footer=({active})=>{
   let history=useHistory() 
   function handleFooterClick(e){
     const value=e.currentTarget.id;
     history.push('/'+value)
   } 
   return(
       <div className="footer">
           <div className={active==='home'?"footer_unit footer_active":"footer_unit"} id="home" onClick={handleFooterClick}>
               <div className="footer_unit_img">
                   <img src={active==='home'?"docs/img/icons/home_dark.png":"docs/img/icons/home_lite.png"} />
                   <p>Home</p>
               </div>
           </div>
           <div className={active==='search'?"footer_unit footer_active":"footer_unit"} id="search" onClick={handleFooterClick}>
               <div className="footer_unit_img">
                   <img src={active==='search'?"docs/img/icons/search_dark.png":"docs/img/icons/search_lite.png"} onClick={handleFooterClick}/>
                   <p>Search</p>
               </div>
           </div>
           <div className={active==='category'?"footer_unit footer_active":"footer_unit"} id="category" onClick={handleFooterClick}>
               <div className="footer_unit_img">
                   <img src={active==='category'?"docs/img/icons/category_dark.png":"docs/img/icons/category_lite.png"} />
                   <p>Categories</p>
               </div>
           </div>
       </div>
   )
}
export default Footer;