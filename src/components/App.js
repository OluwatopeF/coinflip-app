import '../App.css';
import { useState } from 'react';

function App() {

  var [selectedSide, setSelectedSide] = useState(1);
  var[headCount, setHeadCount] = useState(0)
  var[tailCount, setTailCount] = useState(0)
  const [flipResult, setFlipResult] = useState(0);
  const [coinFlip, setCoinFlip] = useState("img-coin");
  
  // const [resultHeads, setResultHeads] = useState(false);
  // const [resultTails, setResultTails] = useState(false);

  

  const flipCoin = () => {
    const coinResult = Math.round(Math.random());
    setSelectedSide(coinResult);
    setFlipResult(flipResult + 1);

    // play animation here (limit 1 sec, 3 - 4 times)
    if(coinFlip === 'img-coin'){
      setCoinFlip('img-coinPlay');
      setTimeout(() => (setCoinFlip('img-coin')), 1000);
    }
    else{
      setCoinFlip('img-coin');  
    }
  }
  
  const statusCoin = () => {
    if(selectedSide === 1){
      setHeadCount(headCount => headCount + 1);
      //play heads animation
    }
    else{
      setTailCount(tailCount => tailCount + 1);
      //play tails animation
    }
  }

  const resetCoin = () => {
    setFlipResult(flipResult => flipResult * 0);
    setHeadCount(headCount => headCount * 0);
    setTailCount(tailCount => tailCount * 0);
  
  }

// Required to run two function on one onclick
  const coinFunctions = () => {
    flipCoin();
    setTimeout(() => {
      statusCoin();
    }, 1000);
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

        <div className={coinFlip}>
            
          <div className='img-coin1'>H</div>
          <div className='img-coin2'>T</div>
        </div>
      
      <div className="buttons-div">
        <button onClick={coinFunctions}>Flip coin</button>
        <button onClick={resetCoin}>Reset</button>
      </div>
      
    </div>
  );
}

export default App;
