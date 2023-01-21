import down from './arrow-down-solid.svg';
import up from './arrow-up-solid.svg';
import './App.css';
import React from 'react';

//LETS CREATE COMPONENTS AND TRY TO GET EVERYTHING WITH JUST ONE STATE

function App() {

  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)

  function handleReset () {

    setBreakLength(5)
    setSessionLength(25)

  }

  function handleSettingBreakOrSessionLength(event){
    const increase_or_decrease = event.target.parentNode.id
     if (increase_or_decrease === "break-decrement") {
      setBreakLength(prev=> prev-1)
    }
    else if (increase_or_decrease === "break-increment") {
      setBreakLength(prev=> prev+1)
    }
    else if(increase_or_decrease === "session-decrement") {
      setSessionLength(prev => prev-1)
    }
    else if (increase_or_decrease === "session-increment") {
      setSessionLength(prev => prev+1)
    }

   console.log(increase_or_decrease)

  }

  return (
    <main>
      <h1>25 + 5 Clock</h1>
      <div className='break_session_container'>
        <div className='break_container'>
          <div id='break-label'>Break Length</div>
          <div className='break_counter_container'>
            <div id="break-decrement" onClick={handleSettingBreakOrSessionLength}><img src={down} alt="decrement break length"/></div>
            <div id="break-length">{breakLength}</div>
            <div id="break-increment" onClick={handleSettingBreakOrSessionLength}><img src={up} alt="increment break length"/></div>

          </div>
        </div>
        <div className='session_length_container'>
          <div id='session-label'>Session Length</div>
          <div className='session_counter_container'>
            <div id="session-decrement" onClick={handleSettingBreakOrSessionLength}><img src={down} alt="decrement break length"/></div>
            <div id="session-length">{sessionLength}</div>
            <div id="session-increment" onClick={handleSettingBreakOrSessionLength}><img src={up} alt="increment break length"/></div>

          </div>
        </div>
       
      </div>

      <div className='session_container'>
          <div id="timer-label">Session</div>
          <div id="timer-left">25:00</div>
          <div className='button_container'>
            <div id="start_stop">start/stop</div>
            <div id="reset" onClick={handleReset}>Reset</div>
          </div>
      </div>
      </main>
  );
}

export default App;
