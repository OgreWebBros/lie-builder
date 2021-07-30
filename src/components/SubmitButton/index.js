import React, { Component } from "react";

class SubmissionButton  extends Component {
  render() {
    return (
      <button className="submit-button" onClick={this.props.handleClick}>
          {this.props.text}
      </button>
    );
  }
}

export default SubmissionButton;
