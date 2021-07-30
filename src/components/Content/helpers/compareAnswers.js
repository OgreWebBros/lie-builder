export function compareAnswers() {

  //Check for tie condition and return null, initial state is set for a tie
  let winLossMarker = 0;

  const pOne = this.state.playerOne;
  const pTwo = this.state.playerTwo;
  const highWins = this.state.highWins;

  var i;
  for(i = 0; i < pOne.length; i++){
    if (highWins[i] && pOne[i]>pTwo[i]){
      winLossMarker++
    }else if(!highWins[i] && pOne[i]<pTwo[i]){
      winLossMarker++
    }else if(highWins[i] && pOne[i]<pTwo[i]){
      winLossMarker--
    }else if(!highWins[i] && pOne[i]>pTwo[i]){
      winLossMarker--
    }
  };



  if (winLossMarker>0) {
    this.setState({
      winner: "Player One"
    });
  } else if(winLossMarker<0) {
    this.setState({
      winner: "Player Two"
    });
  }
}