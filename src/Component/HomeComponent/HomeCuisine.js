import React from 'react'
import HomeCuisineCard from './HomeCuisineCard';

const HomeCuisine=({setCuisine,setWhich})=>{
  return(
      <div className="homecuisine">
          <div className="unit_title">
              <p>Cuisines</p>
          </div>
          <div className="cuisine_container">
              <HomeCuisineCard 
                  id="Indian"
                  img="docs/img/indian.jpg"
                  name="Indian"
                  bg="cuisine_unit peach"
                  setCuisine={setCuisine}
                  setWhich={setWhich}/>
              <HomeCuisineCard
                  id="Italian" 
                  img="docs/img/italian.jpg"
                  name="Italian"
                  bg="cuisine_unit teal"
                  setCuisine={setCuisine}
                  setWhich={setWhich} />
              <HomeCuisineCard
                  id="French" 
                  img="docs/img/french.jpg"
                  name="French"
                  bg="cuisine_unit pink"
                  setCuisine={setCuisine} 
                  setWhich={setWhich}/>
              <HomeCuisineCard
                  id="British"                    
                  img="docs/img/british.jpg"
                  name="British"
                  bg="cuisine_unit peach"
                  setCuisine={setCuisine}
                  setWhich={setWhich}/>
              <HomeCuisineCard
                  id="Chinese" 
                  img="docs/img/chinese.jpg"
                  name="Chinese"
                  bg="cuisine_unit peach"
                  setCuisine={setCuisine} 
                  setWhich={setWhich}/>
              <HomeCuisineCard
                  id="Mexican" 
                  img="docs/img/mexican.jpg"
                  name="Mexican"
                  bg="cuisine_unit teal"
                  setCuisine={setCuisine}
                  setWhich={setWhich}/>
              <HomeCuisineCard
                  id="Mediterranean" 
                  img="docs/img/mediterranean.jpg"
                  name="mediterranean"
                  bg="cuisine_unit pink"
                  setCuisine={setCuisine}
                  setWhich={setWhich}/>
              <HomeCuisineCard 
                  id="Thai"
                  img="docs/img/thai.jpg"
                  name="Thai"
                  bg="cuisine_unit peach"
                  setCuisine={setCuisine}
                  setWhich={setWhich}/>      
          </div>
      </div>
  )
}
export default HomeCuisine;