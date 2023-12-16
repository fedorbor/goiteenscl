import React from 'react';
// import PropTypes from 'prop-types';
import RecipeInfo from './RecipeInfo';
import { FaClock, FaServicestack, FaFire, FaStar } from 'react-icons/fa';
import styles from './Recipe.module.css';

const Recipe = ({ recipe }) => {
  const { name, time, servings, calories, difficulty, image } = recipe;

  return (
    <div className={styles.recipe}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <RecipeInfo text={`Time: ${time} minutes`} icon={<FaClock />} />
      <RecipeInfo text={`Servings: ${servings}`} icon={<FaServicestack />} />
      <RecipeInfo text={`Calories: ${calories}`} icon={<FaFire />} />
      <RecipeInfo text={`Difficulty: ${difficulty}`} icon={<FaStar />} />
    </div>
  );
};

// Recipe.propTypes = {
//   recipe: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     time: PropTypes.string.isRequired,
//     servings: PropTypes.number.isRequired,
//     calories: PropTypes.number.isRequired,
//     difficulty: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Recipe;
