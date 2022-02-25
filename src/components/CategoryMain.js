import React,{useState} from 'react'
import axios from 'axios';
import CategoryCard from './CategoryCard';

const CategoryMain=()=>{
  const [cat,setCat]=useState([])
  axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response)=>{
    setCat(response.data.categories)
  })

  return(
      <div className="category_section">
          {cat.map(element=>{
            return(
              <CategoryCard 
                img={element.strCategoryThumb}
                name={element.strCategory}
                description={element.strCategoryDescription}
          />
            )
          })}
      </div>
  )
}

export default CategoryMain;