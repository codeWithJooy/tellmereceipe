import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Footer from '../Component/Footer'
import IngredientUnit from '../Component/ReceipeComponent/IngredientUnit'
import {useHistory} from 'react-router-dom'

const Receipe=({receipeId,backPage})=>{
    const history=useHistory()
    const [title,setTitle]=useState('')
    const [servings,setServings]=useState('')
    const [image,setImage]=useState('')
    const [ingredients,setIngredients]=useState([])

    useEffect(() => {
        const fetchReceipe=async()=>{
            const receipe_array=await axios(
              `https://api.spoonacular.com/recipes/${receipeId}/information?apiKey=d6f7f4ac543540b090509dc35cec8c73`
            );
            
            setTitle(receipe_array.data.title)
            setServings(receipe_array.data.servings)
            setImage(receipe_array.data.image)
            setIngredients(receipe_array.data.extendedIngredients)
            
        }
        fetchReceipe()
    }, [ ]);
    
    const all_ingredients=ingredients.map(element=>{
                              return(
                                <IngredientUnit 
                                   ingre_img="docs/img/indian.jpg"
                                   ingre_name={element.name.toUpperCase()}
                                   ingre_quantity={element.amount +" "+element.unit} />
                              )
                            })
    
    
    function handleBack(){
        history.push('/'+backPage)
    }                       

    return(
        <div className="main">
            <div className="receipe">
                
                <div className="receipe_header flex_full">
                   <div className="receipe_back">
                       <img src="docs/img/icons/left-arrow.png" onClick={handleBack}/>
                   </div>
                   <div className="receipe_title">
                     <p>{title.toUpperCase()}</p> 
                   </div>
                   <div className="receipe_logo">
                       <img src="docs/img/logo.png"/>
                   </div>
                </div>

                <div className="receipe_image">
                    <img src={image} />
                </div>
                <div className="ingredients_title">
                   <div className="ingredient_name">
                       <p>Ingredients</p>
                   </div>
                   <div className="serving flex_full">
                       <p>{servings} Servings</p>
                   </div>
                </div>
                <div className="ingredients">

                      {all_ingredients}
                
                </div>
            </div>
            <Footer />    
        </div>
    )
}

export default Receipe;