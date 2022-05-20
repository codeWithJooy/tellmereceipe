import React from 'react'
import {useHistory} from 'react-router-dom'
const Splash=()=>{
    let history=useHistory()
    function handleClick(){
        history.push('/home')
    }
    return(
        <div className="splash_main">
           {/* <img src="splash.jpg" /> */}
           <div className="company_logo">
               <img src="docs/img/logo.png" />
           </div>
           <div className="title">
               <p>
                   Cooking Experience <br/> Like a Chef
               </p>
           </div>
           <div className="subtitle">
               <span>
                   Lets Make a delicious dish with the best receipe for the family.
               </span>
           </div>
           <div className="getstarted">
               <button onClick={handleClick}>Get Started</button>
           </div>
        </div>
    )
}

export default Splash;