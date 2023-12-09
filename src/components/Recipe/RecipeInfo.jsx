import React from 'react';
import PropTypes from 'prop-types';

const RecipeInfo = ({ text, icon }) => {
  return (
    <div>
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