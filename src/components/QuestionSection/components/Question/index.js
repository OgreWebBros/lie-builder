import React, { Component } from 'react';

class Question extends Component {
 render() {
    return (
      <p className="question">
         {this.props.questionList[this.props.questionIndex[this.props.questionNumber]]}?
      </p>
    )
  }
}
 
export default Question;
