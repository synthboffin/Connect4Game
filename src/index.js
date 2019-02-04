import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Question = props => <h1>{props.question}?</h1>;

const Answer = props => {
  const { handleAnswerClick, answer } = props;
  return <button onClick={() => handleAnswerClick(props.id)}>{answer}</button>;
};

const Answers = props => {
  const answers = props.answers.map((a, index) => (
    <Answer
      key={index}
      id={index}
      handleAnswerClick={props.handleClick}
      answer={a}
    />
  ));
  return <div>{answers}</div>;
};

const Counter = props => {
  return (
    <h3>
      {props.title}: {props.count}
    </h3>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    const [question, answers, correct] = this.createNewQuestion();

    this.state = {
      correctCount: 0,
      incorrectCount: 0,
      question: question,
      answers: answers,
      correct: correct
    };
  }

  getOperatorText = operator => {
    switch (operator) {
      case 0:
        return "+";
      case 1:
        return "-";
      case 2:
        return "*";
      case 3:
        return "/";
      default:
        return;
    }
  };

  getOperandText = operand =>
    "" + operand > 0 ? operand : "(" + operand + ")";

  calculateAnswer = (operand1, operand2, operator) => {
    switch (operator) {
      case 0:
        return operand1 + operand2;
      case 1:
        return operand1 - operand2;
      case 2:
        return operand1 * operand2;
      case 3:
        return operand1 / operand2;
      default:
        return;
    }
  };

  createNewQuestion() {
    const operand1 = Math.round(Math.random() * 50 - 25);
    const operand2 = Math.round(Math.random() * 50 - 25);
    const operator = Math.floor(Math.random() * 3);

    let answers = Array.from(Array(5), _ =>
      Math.round(Math.random() * 50 - 25)
    );
    let answerPosition = Math.floor(Math.random() * 5);

    let question =
      "Please tell me, what is " +
      this.getOperandText(operand1) +
      this.getOperatorText(operator) +
      this.getOperandText(operand2);

    let correct = this.calculateAnswer(operand1, operand2, operator);
    //answers.push(correct);
    answers[answerPosition] = correct;

    return [question, answers, correct];
  }

  handleAnswerClick = answerId => {
    if (this.state.answers[answerId] === this.state.correct)
      this.setState({ correctCount: this.state.correctCount + 1 });
    else this.setState({ incorrectCount: this.state.incorrectCount + 1 });

    const [question, answers, correct] = this.createNewQuestion();
    this.setState({ question: question, answers: answers, correct: correct });
  };

  render() {
    return (
      <div className="App">
        <Question question={this.state.question} />
        <Answers
          handleClick={this.handleAnswerClick}
          answers={this.state.answers}
        />
        <Counter title="Correct" count={this.state.correctCount} />
        <Counter title="Incorrect" count={this.state.incorrectCount} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
