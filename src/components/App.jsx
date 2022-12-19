import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const eventValue = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [eventValue]: prevState[eventValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div>Please leave feedback</div>
        <button onClick={this.handleIncrement}>Good</button>
        <button onClick={this.handleIncrement}>Neutral</button>
        <button onClick={this.handleIncrement}>Bad</button>
        <div>Statistics</div>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>
            Positive feedback:{' '}
            {good ? this.countPositiveFeedbackPercentage() : 0}%
          </li>
        </ul>
      </>
    );
  }
}
