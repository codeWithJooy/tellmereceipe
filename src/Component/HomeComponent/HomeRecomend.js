import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Recomendcard from "./RecomendCard"
const HomeRecomend=({setReceipeId,setReceipeBack})=>{
    const settings = {

        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1
      };
  return(
      <div className="homerecomend">
          <div className="unit_title">
              <p>Recommendations</p>
          </div>
          <div className="recommendation_unit">
          <Slider {...settings}>
              <Recomendcard id="637535"
                            img="https://spoonacular.com/recipeImages/637535-312x231.jpg" 
                            name="Cheese and Leek Strata"
                            setReceipeId={setReceipeId} 
                            setReceipeBack={setReceipeBack}
                            />
              <Recomendcard id="654532"
                            img="https://spoonacular.com/recipeImages/654532-312x231.jpg" 
                            name="Paneer jalfrezi"
                            setReceipeId={setReceipeId} 
                            setReceipeBack={setReceipeBack}/>
              <Recomendcard id="657081"
                            img="https://spoonacular.com/recipeImages/657081-312x231.jpg" 
                            name="Prawn and Fennel Filo Pastry"
                            setReceipeId={setReceipeId} 
                            setReceipeBack={setReceipeBack}/>
              <Recomendcard id="640321"
                            img="https://spoonacular.com/recipeImages/640321-312x231.jpg" 
                            name="Crab Stacks"
                            setReceipeId={setReceipeId} 
                            setReceipeBack={setReceipeBack}/>
              <Recomendcard id="651914"
                            img="https://spoonacular.com/recipeImages/651914-312x231.jpg" 
                            name="Minced Mutton Curry"
                            setReceipeId={setReceipeId} 
                            setReceipeBack={setReceipeBack}/>                                                                      
                           
           </Slider>   
          </div>
      </div>
  )
}
export default HomeRecomend;