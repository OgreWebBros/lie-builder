import React, { Component } from "react";
import StatLine from "./components/StatLine";

class ResultsSection extends Component {
  render() {

    const resultsKeys = this.props.resultsKeys;
    const resultsList = resultsKeys.map(resultsIndex => (
      <StatLine
        key={resultsIndex.toString()}
        resultsIndex={resultsIndex}
        playerOneAnswer={this.props.playerOneAnswer}
        playerTwoAnswer={this.props.playerTwoAnswer}
        whatWon={this.props.whatWon}
      />
    ));

    return (
      <div className="results-wrapper">
        <h1 className="declared-winner">
          {" "}
          {this.props.winner === undefined
            ? "A tie! Gooooddddamn, what is even the point of this site"
            : this.props.winner + " wins!"}
        </h1>
        <ul className="results-stats">
        {resultsList}
        </ul>
      </div>
    );
  }
}

export default ResultsSection;
