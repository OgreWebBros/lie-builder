import React, { Component } from "react";
import QuestionInputGroup from "./components/QuestionInputGroup";


class QuestionSection extends Component {
  
  componentDidMount(){
    this.props.setHighOrLow();
    this.props.getQuestionIndexArray(this.props.questionKeys.length, this.props.questionList.length);
      }

  render() {
    const questionKeys = this.props.questionKeys;
    const questions = questionKeys.map(questionNumber => (
      <QuestionInputGroup
        key={questionNumber.toString()}
        questionNumber={questionNumber}
        questionIndex={this.props.questionIndex}
        questionList={this.props.questionList}
        handleAnswerChange={this.props.handleAnswerChange}
        playerOneAnswer={this.props.playerOneAnswer}
        playerTwoAnswer={this.props.playerTwoAnswer}
      />
    ));

    return <ul className="questions-wrapper">{questions}</ul>;
  }
}

export default QuestionSection;
