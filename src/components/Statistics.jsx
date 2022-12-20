import PropTypes from 'prop-types';
import { StatidticsList, StatidticsItem } from 'components/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatidticsList>
    <StatidticsItem>Good: {good}</StatidticsItem>
    <StatidticsItem>Neutral: {neutral}</StatidticsItem>
    <StatidticsItem>Bad: {bad}</StatidticsItem>
    <StatidticsItem>Total: {total()}</StatidticsItem>
    <StatidticsItem>
      Positive feedback: {good ? positivePercentage() : '0'}%
    </StatidticsItem>
  </StatidticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
