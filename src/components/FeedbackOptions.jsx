import PropTypes from 'prop-types';
import { Button } from 'components/FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    return (
      <Button key={option} onClick={onLeaveFeedback}>
        {option}
      </Button>
    );
  });

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
