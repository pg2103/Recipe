import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Cuisine() {
  const params = useParams();
  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`);
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }} // Corrected typo from "opactiy" to "opacity"
      initial={{ opacity: 0 }} // Corrected typo from "opactiy" to "opacity"
      exit={{ opacity: 0 }} // Corrected typo from "opactiy" to "opacity"
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => (
        <Link to={`/recipe/${item.id}`} key={item.id}> {/* Moved key to Link */}
          <Card>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        </Link>
      ))}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;