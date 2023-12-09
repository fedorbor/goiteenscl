import React from 'react';
import Recipe from './Recipe/Recipe';
import recipesData from './Recipe/RecipesData';


export const App = () => {
  return (
    <div>
      {recipesData.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
};