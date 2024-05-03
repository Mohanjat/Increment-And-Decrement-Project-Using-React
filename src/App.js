import { useState } from 'react';
import './App.css';

function App() {

  const [count ,setCount] = useState(0);
   
  function incClickHandlar(){
    setCount(count+1);
  }
    
  function decClickHandlar(){
    setCount(count-1);
      
  } 

  function resetClickHandlar(){
    setCount(0);
  }

  return (
    <div className='Inc_dec'>

      <div className='heading' >
        <h3>Increment & Decrement</h3>
      </div>

      <div className='allBtn' >
        <button className='btn1' onClick={decClickHandlar} >-</button>
        <button className='btn2' >{count}</button>
        <button className='btn3' onClick={incClickHandlar} >+</button>
      </div>

      <div>
        <button className='reset_btn' onClick={resetClickHandlar} >Reset</button>
      </div>

    </div>
  )
}

export default App;
