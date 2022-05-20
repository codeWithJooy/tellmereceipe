import React from 'react'
import HomeHeader from '../Component/HomeComponent/HomeHeader'
import HomeSearch from '../Component/HomeComponent/HomeSearch'
import Footer from '../Component/Footer'
import HomeRecomend from '../Component/HomeComponent/HomeRecomend'
import HomeCuisine from '../Component/HomeComponent/HomeCuisine'
import HomeNewReceipe from '../Component/HomeComponent/HomeNewReceipe'

const Home = ({setId,setReceipeBack,setCuisine,setWhich})=>{
   return(
       <div className="main">
           <HomeHeader />
           <HomeSearch placeholder="Search Receipes.."/>
           <HomeRecomend setReceipeId={setId} setReceipeBack={setReceipeBack}/>
           <HomeCuisine setCuisine={setCuisine} 
                        setWhich={setWhich}/>
           <HomeNewReceipe />
           <Footer active="home"/>
       </div>
   )
}

export default Home;