import React from 'react'

const Header=()=>{
   function handleClick(){
  
      alert("hii")
  
   }
   return(
       <div className="header" onScroll={handleClick}>
         <div className="header_container">
             <div className="hamburger">
               <img src="hamburger.png" />
             </div>
             <div className="title">
                 <p>TellMeReceipe</p>
             </div>
             <div className="logo">
                 <img src="logo.png" />
             </div>
         </div>
       </div>
   )
}

export default Header;