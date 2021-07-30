import React, { Component } from 'react';

class StatLine extends Component {
   
    render() {
        const index = this.props.resultsIndex;
        let resultNumber = Number(this.props.resultsIndex) + 1 ;
        const highWon= this.props.whatWon[index] === true ? "high" : "low";

        return (
          <li className="stat-line">
              {"For question number " + resultNumber + " the " + highWon + " answer won."}
              <br />
              {"Player One answered " + this.props.playerOneAnswer[index]+ ", Player Two answered "+ this.props.playerTwoAnswer[index] + "." }
          </li>
        )
      }
    }
     
export default StatLine;
    