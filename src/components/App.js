import '../App.css';
import { useState } from 'react';

function App() {

  var [selectedSide, setSelectedSide] = useState(1);
  var[headCount, setHeadCount] = useState(0)
  var[tailCount, setTailCount] = useState(0)
  const [flipResult, setFlipResult] = useState(0);
  

  const flipCoin = () => {
    const coinResult = Math.round(Math.random());
    setSelectedSide(coinResult);
    setFlipResult(flipResult + 1);
  }

  const resetCoin = () => {
    setFlipResult(flipResult * 0);
    setHeadCount(headCount * 0);
    setTailCount(tailCount * 0);
  
  }
  
  const statusCoin = () => {
    if(selectedSide === 1){
      setHeadCount(headCount + 1);
    }
    else{
      setTailCount(tailCount + 1);
    }
  }

// Required to run two function on one onclick
  const coinFunctions = () => {
    flipCoin();
    statusCoin();
  }


  // return  results in form of single div box
  return (
    <div className="coin">
      <h1>Flip A Coin</h1>
        
        <div className="status">
          <h3>Heads:{headCount}</h3>
          <h3>Tails:{tailCount}</h3>
        </div>
        
        <div>
          <h4>No. of flips: {flipResult}</h4>
          <h4>You got {selectedSide === 1 ? "heads":"tails"}</h4>
        </div>

        <div className="img-coin">
        {/* contains two coin images. shows result of one when clicked */}
        </div>
      
      <div className="buttons-div">
        <button onClick={coinFunctions}>Flip coin</button>
        <button onClick={resetCoin}>Reset</button>
      </div>
      
    </div>
  );
}

export default App;
