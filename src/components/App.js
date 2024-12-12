import '../App.css';
import { useState } from 'react';

function App() {

  var [selectedSide, setSelectedSide] = useState(1);
  const [flipResult, setFlipResult] = useState(0);

  const flipCoin = () => {
    const coinResult = Math.round(Math.random());
    setSelectedSide(coinResult);
    setFlipResult(flipResult + 1);
  }

  const resetCoin = () => {
    setFlipResult(flipResult * 0);
  }

  // return  results in form of single div box
  return (
    <div className="coin">
      <h1>Flip A Coin</h1>
        
        <div className="status">
          <h3>Heads: </h3>
          <h3>Tails: </h3>
        </div>
        
        <div>
          <h4>No. of flips: {flipResult}</h4>
          <h4>You got {selectedSide === 1 ? "heads":"tails"}</h4>
        </div>

        <div className="img-coin">
        {/* contains two coin images. shows result of one when clicked */}
        </div>
      
      <div className="buttons-div">
        <button onClick={flipCoin}>Flip coin</button>
        <button onClick={resetCoin}>Reset</button>
      </div>
      
    </div>
  );
}

export default App;
