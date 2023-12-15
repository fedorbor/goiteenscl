import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recipe.module.css';

const RecipeInfo = ({ text, icon }) => {
  return (
    <div className={styles.recipeInfo}>
      <span>{text}</span>
      {icon}
    </div>
  );
};

RecipeInfo.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default RecipeInfo;