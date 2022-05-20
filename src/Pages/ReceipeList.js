import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ListCard from '../Component/ReceipeListComponent/ListCard'
import Footer from '../Component/Footer'
const ReceipeList =({cuisine,category,setReceipeId,setReceipeBack,which})=>{
  const [receipeList,setReceipeList]=useState([])
  let url=""
  if(which==='cuisine'){
     url=`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=d6f7f4ac543540b090509dc35cec8c73`
  }
  else{
     url=`https://api.spoonacular.com/recipes/complexSearch?type=${category}&apiKey=d6f7f4ac543540b090509dc35cec8c73`
  }
  useEffect(() => {
    const fetchReceipe=async()=>{
        const receipe_list=await axios(
          url
        );
        //console.log(receipe_list.data.results)
        setReceipeList(receipe_list.data.results)
        // setTitle(receipe_array.data.title)
        // setServings(receipe_array.data.servings)
        // setImage(receipe_array.data.image)
        // setIngredients(receipe_array.data.extendedIngredients)
        
    }
    fetchReceipe()
   }, [ ]);
   
   const all_receipes=receipeList.map(element=>{
                        return(
                          <ListCard 
                             img={element.image}
                             title={element.title}
                             likes={element.id}
                             id={element.id}
                             setReceipeId={setReceipeId}
                             setReceipeBack={setReceipeBack}
                             which={which}/>
                        )  
                      })
   return(
       <div className="main">
           <div className="category_header">
               <h3>{which==='cuisine'?cuisine:category} Receipes For You</h3>
               <div className="list_container">
                   {all_receipes} 
               </div>
           </div>
           <Footer active="category"/>
       </div>
   )
}

export default ReceipeList;