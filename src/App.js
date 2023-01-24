import down from './arrow-down-solid.svg';
import up from './arrow-up-solid.svg';
import './App.css';
import React from 'react';

//LETS CREATE COMPONENTS AND TRY TO GET EVERYTHING WITH JUST ONE STATE

function App() {
  //let d = new Date();


  const [state, setState] = React.useState({
                                              breakLength: 5,
                                              sessionLength: 25,
                                              remaining: "25:00", 
                                              ongoing: false
  })

  //let futureDate = new Date();
  

  function handleReset () {

    setState(prev=> {
      return (
        {...prev, 
          breakLength: 5,
          sessionLength: 25, 
          remaining: "25:00"
        }
      )
    })

  }

  function handleSettingBreakOrSessionLength(event){
    const increase_or_decrease = event.target.parentNode.id
     if (increase_or_decrease === "break-decrement") {
      setState(prev => {
        if (prev.breakLength > 1) {
          return {
            ...prev, breakLength: prev.breakLength - 1
          }
        }
        else {
          return prev
        }
       
      })
    }
    else if (increase_or_decrease === "break-increment") {
      setState(prev => {
        if (prev.breakLength < 60) {
          return {
            ...prev, breakLength: prev.breakLength + 1
          }
        }
        else return prev
      
      })
    }
    else if(increase_or_decrease === "session-decrement") {
      setState(prev => {
        if (prev.sessionLength > 0) {
          let remain;
          if (prev.sessionLength-1 < 10) {
            remain = "0" + (prev.sessionLength - 1);
          }
          else remain = prev.sessionLength-1
          return {
            ...prev, 
            sessionLength: prev.sessionLength - 1, 
            remaining: remain + ":00"
          }
        }
        else return prev
          
      })
    }
    else if (increase_or_decrease === "session-increment") {
      setState(prev => {
        if (prev.sessionLength < 60) {
          let remain;
          if (prev.sessionLength + 1 < 10) {
            remain = "0" + (prev.sessionLength + 1);
          }
          else remain = prev.sessionLength+1
          return {
            ...prev, 
            sessionLength: prev.sessionLength + 1, 
            remaining: remain + ":00"
          }
        }
        else return prev

          
      })
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
            <div id="break-length">{state.breakLength}</div>
            <div id="break-increment" onClick={handleSettingBreakOrSessionLength}><img src={up} alt="increment break length"/></div>

          </div>
        </div>
        <div className='session_length_container'>
          <div id='session-label'>Session Length</div>
          <div className='session_counter_container'>
            <div id="session-decrement" onClick={handleSettingBreakOrSessionLength}><img src={down} alt="decrement break length"/></div>
            <div id="session-length">{state.sessionLength}</div>
            <div id="session-increment" onClick={handleSettingBreakOrSessionLength}><img src={up} alt="increment break length"/></div>

          </div>
        </div>
       
      </div>

      <div className='session_container'>
          <div id="timer-label">Session</div>
          <div id="time-left">{state.remaining}</div>
          <div className='button_container'>
            <div id="start_stop">start/stop</div>
            <div id="reset" onClick={handleReset}>Reset</div>
          </div>
      </div>
      </main>
  );
}

export default App;
