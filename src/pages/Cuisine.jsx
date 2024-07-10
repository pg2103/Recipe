import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Cuisine() {const params=useParams(); 
  const [cuisine, setCuisine] = useState([]);
  const getCuisine = async (name) => { 
    
    const data= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`);
    const recipes= await data.json();
    setCuisine(recipes.results);
  }
  useEffect(() => {
    getCuisine(params.type);

  }, [params.type]);
  return (
    <div>
      Cuisine
    </div>
  )
}

export default Cuisine
