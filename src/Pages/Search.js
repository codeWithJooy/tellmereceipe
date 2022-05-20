import React from 'react'
import HomeSearch from '../Component/HomeComponent/HomeSearch'
import Footer from '../Component/Footer'

const Search = ()=>{
   return(
       <div className="main">
           <div className="category_header">
               <h3>Receipe for Ingredients</h3>
               <p> Search Receipe For Ingredients you have</p>
           </div>
           <HomeSearch placeholder="Search By Ingredients..."/>
           <Footer active="search"/>
       </div>
   )
}

export default Search;