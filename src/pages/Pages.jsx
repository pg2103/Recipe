import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home'; 
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion'; // Corrected import for AnimatePresence

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'> 
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} /> 
        <Route path="/searched/:search" element={<Searched />} /> 
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;