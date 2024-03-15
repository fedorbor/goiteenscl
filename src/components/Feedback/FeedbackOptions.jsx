import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
    ))}
    <form onSubmit={(e) => {
      e.preventDefault();
      const value = e.target.elements.feedback.value;
      if (value.trim() !== '') {
        onLeaveFeedback(value);
        e.target.elements.feedback.value = '';
      }
    }}>
      <input type="text" name="feedback" placeholder="Leave feedback" />
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default FeedbackOptions;