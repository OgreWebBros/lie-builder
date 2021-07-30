
import Randomizer from "react-randomizer";

export function setHighOrLow() {
  let randomizedHighWins = this.state.highWins;
  var i;
  for(i = 0; i < randomizedHighWins.length; i++){
  randomizedHighWins[i] = Randomizer.randomNumber(0, 1) > 0;
  }
  this.setState({
    highWins: randomizedHighWins
  });
}
