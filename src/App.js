import React, { useState } from "react";
import "./App.css";



function App() {
  const [count, setCount] = useState(0);

  function decrementHandler() {
     setCount(count-1);
  }
  function incrementHandler () {
     setCount(count+1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="main_counter">

    <div className="count_para">Increment and Decrement <br/>Counter App</div>  
    <div className="counter_btn">
     <button className="minus_btn" onClick={decrementHandler}>
         -
     </button>

     <div className="count_btn"> 
           {count}
     </div>

     <button className="plus_btn" onClick={incrementHandler}>
        +
     </button>

    </div>  
    <button className="reset_btn" onClick={resetHandler}>Reset</button>
      
    </div>
  );
}

export default App;
