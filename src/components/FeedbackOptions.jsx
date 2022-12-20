export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    return (
      <button key={option} onClick={onLeaveFeedback}>
        {option}
      </button>
    );
  });
