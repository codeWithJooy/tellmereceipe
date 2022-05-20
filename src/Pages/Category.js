import React from 'react'
import HomeCuisineCard from '../Component/HomeComponent/HomeCuisineCard'
import CategoryCard from '../Component/CategoryComponent/CategoryCard'
import Footer from '../Component/Footer'

const Category = ({setCategory,setWhich})=>{
   return(
       <div className="main">
           <div className="category_header">
               <h3>Receipe Category</h3>
               <p> Select from range of receipe categories</p>
           </div>
           <div className="cuisine_container">
           <CategoryCard 
                  id="Main Course"
                  img="docs/img/indian.jpg"
                  name="Main Course"
                  bg="cuisine_unit peach"
                  setCategory={setCategory}
                  setWhich={setWhich}/>
              <CategoryCard
                  id="Appetizer" 
                  img="docs/img/italian.jpg"
                  name="Appetizer"
                  bg="cuisine_unit teal"
                  setCategory={setCategory}
                  setWhich={setWhich}/>
              <CategoryCard
                  id="Beverage" 
                  img="docs/img/french.jpg"
                  name="Beverage"
                  bg="cuisine_unit pink"
                  setCategory={setCategory}
                  setWhich={setWhich}/>
              <CategoryCard
                  id="Snack"                    
                  img="docs/img/british.jpg"
                  name="Snack"
                  bg="cuisine_unit peach"
                  setCategory={setCategory}
                  setWhich={setWhich}/>
              <CategoryCard
                  id="Soup" 
                  img="docs/img/chinese.jpg"
                  name="Soup"
                  bg="cuisine_unit peach"
                  setCategory={setCategory}
                  setWhich={setWhich}/>
              <CategoryCard
                  id="Breakfast" 
                  img="docs/img/mexican.jpg"
                  name="Breakfast"
                  bg="cuisine_unit teal"
                  setCategory={setCategory}
                  setWhich={setWhich}/>
              <CategoryCard
                  id="Dessert" 
                  img="docs/img/mediterranean.jpg"
                  name="Dessert"
                  bg="cuisine_unit pink"
                  setCategory={setCategory}
                  setWhich={setWhich}/>
              <CategoryCard 
                  id="Side Dish"
                  img="docs/img/thai.jpg"
                  name="Side Dish"
                  bg="cuisine_unit peach"
                  setCategory={setCategory}
                  setWhich={setWhich}/>
           </div>
           <Footer active="category"/>
       </div>
   )
}

export default Category;