import React, { Component } from "react";
import Question from "../Question";
import InputPair from "../InputPair";

class QuestionInputGroup extends Component {
  render() {
    return (
      <li className="question-input-group">
        <Question 
          questionNumber={this.props.questionNumber}
          questionIndex={this.props.questionIndex} 
          questionList={this.props.questionList} />
        <InputPair
          questionNumber={this.props.questionNumber}
          handleAnswerChange={this.props.handleAnswerChange}
          playerOneAnswer={this.props.playerOneAnswer}
          playerTwoAnswer={this.props.playerTwoAnswer}
        />
      </li>
    );
  }
}

export default QuestionInputGroup;
