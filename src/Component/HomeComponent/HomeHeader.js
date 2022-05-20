import React from 'react'

const HomeHeader=()=>{
   return(
    <div className="home_header flex_full">
       <div className="home_header_left">
          <h3>Hey Foodie,</h3>
          <p>What you want to cook today ?</p>
       </div>
       <div className="home_header_right flex_full">
          <img src="docs/img/logo.png" />
       </div>
    </div>
   )
}

export default HomeHeader;