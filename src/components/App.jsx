// import React from 'react';
// import Recipe from './Recipe/Recipe';
// import recipesData from './Recipe/RecipesData';

import { Alert } from "./Alert/Alert";


export const App = () => {
  return (
    <div>
      {/* {recipesData.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))} */}
      <Alert text="перестань" type="warning" />
      <Alert text="спрацювало" type="success" />
      <Alert text="error" type="error" />
    </div>
  );
};  