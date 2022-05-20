import React from 'react'

const HomeNewReceipe=()=>{
   return(
       <div className="homenewreceipe">
           <div className="newreceipecontainer">
               <div className="newreceipecard flex_half">
                   <div className="newreceipeleft">
                      <div className="new_receipe_title">
                         <p>Veggie Rice</p>
                      </div>
                      <div className="new_receipe_details flex_full">
                          <div className="new_receipe_time">
                            <img src="docs/img/icons/home_dark.png" />
                            <p>15 Minutes</p>
                          </div>
                          <div className="new_receipe_time">
                            <img src="docs/img/icons/home_dark.png" />
                            <p>15 Minutes</p>
                          </div>
                      </div>
                   </div>
                   <div className="newreceiperight ">
                      <img src="docs/img/french.jpg" />
                   </div>
               </div>

           </div>
       </div>
   )
}
export default HomeNewReceipe;