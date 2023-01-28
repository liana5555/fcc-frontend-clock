import down from './arrow-down-solid.svg';
import up from './arrow-up-solid.svg';
import './App.css';
import React from 'react';
import beep from './mixkit-sport-start-bleeps-918.wav'



function App() {


  const [state, setState] = React.useState({
                                              breakLength: 5,
                                              sessionLength: 25,
                                              remaining: "25:00", 
                                              ongoing: false, 
                                              state: "Session",
                                              remain_in_s: 1500
  })


React.useEffect(()=> {

  if (state.remain_in_s === 0 && state.ongoing ===true) {
    let audio_tag = document.getElementById("beep");
        console.log(audio_tag)
        audio_tag.currentTime=0;
        audio_tag.play();
  }

  const interval = setInterval(() => 
  {
  if (state.ongoing) {
    setState((prev) => {
      if (prev.remain_in_s !== 0) {
        return ({
          ...prev, 
          remain_in_s: (prev.remain_in_s - 1)
        })
      }
      else {
        if (prev.state === "Session") {
          return ({
            ...prev, 
            remain_in_s: (prev.breakLength * 60),
            state: "Break"
          })
        }
        else if (prev.state === "Break") {
          return ({
            ...prev, 
            remain_in_s: (prev.sessionLength * 60),
            state: "Session"
          })

        }
        
        
      }
      
     })
    
  }
 
   
  }, 1000);
  return () => {
    clearInterval(interval);
  };
}, [state.ongoing, state.remain_in_s]) //state.remain_in_s


  

  function handleReset () {
    let audio_tag = document.getElementById("beep");
        console.log(audio_tag)
        audio_tag.pause();
        audio_tag.currentTime=0;
        

    setState(prev=> {
      return (
        {...prev, 
          breakLength: 5,
          sessionLength: 25, 
          remaining: "25:00",
          ongoing: false,
          state: "Session",
          remain_in_s: 1500

        }
      )
    })

  }

  function handleSettingBreakOrSessionLength(increase_or_decrease){
    
  
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
        if (prev.sessionLength > 1) {
          let remain;
          if (prev.sessionLength-1 < 10) {
            remain = "0" + (prev.sessionLength - 1);
          }
          else remain = prev.sessionLength-1
          return {
            ...prev, 
            sessionLength: prev.sessionLength - 1, 
            remaining: remain + ":00",
            remain_in_s: ((prev.sessionLength - 1) * 60)
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
            remaining: remain + ":00",
            remain_in_s: ((prev.sessionLength + 1) * 60)
          }
        }
        else return prev

          
      })
    }
  
        


 

  }
  function creating_string(remaining_seconds) {

    let minutes = Math.floor(state.remain_in_s/60)
    let seconds = state.remain_in_s%60

    let seconds_string;
    let minutes_string;

    if (seconds < 10) {
        seconds_string = "0" + seconds
    }
    else {
      seconds_string = seconds
    }


    if (minutes < 10) {
        minutes_string = "0" + minutes
    }
    else{
      minutes_string = minutes
    }

    return (minutes_string + ":" + seconds_string)

}


  function handleStartStop () {
    setState(prev=> {
      return (
        {...prev, 
          ongoing: (!prev.ongoing),
          remaining: creating_string(prev.remain_in_s)
        }
      )
    })
    console.log(state.ongoing)
    
  }
  

  return (
    <main>
      <h1>25 + 5 Clock</h1>
      <div className='break_session_container'>
        <div className='break_container'>
          <div id='break-label'>Break Length</div>
          <div className='break_counter_container'>
            <div id="break-decrement" onClick={() => handleSettingBreakOrSessionLength("break-decrement")}><img name="break-decrement" src={down} alt="decrement break length"/></div>
            <div id="break-length">{state.breakLength}</div>
            <div id="break-increment" onClick={() => handleSettingBreakOrSessionLength("break-increment")}><img name="break-increment" src={up} alt="increment break length"/></div>

          </div>
        </div>
        <div className='session_length_container'>
          <div id='session-label'>Session Length</div>
          <div className='session_counter_container'>
            <div id="session-decrement" onClick={() => handleSettingBreakOrSessionLength("session-decrement")}><img name="session-decrement" src={down} alt="decrement sesiion length"/></div>
            <div id="session-length">{state.sessionLength}</div>
            <div id="session-increment" onClick={() =>handleSettingBreakOrSessionLength("session-increment")}><img name="session-decrement" src={up} alt="increment session length"/></div>

          </div>
        </div>
       
      </div>

      <div className='session_container'>
          <div id="timer-label">{state.state}</div>
          <div id="time-left">{state.ongoing ? creating_string(state.remain_in_s) : state.remaining}</div>
          <div className='button_container'>
            <audio loop={false} src={beep} id="beep"></audio>
            <div id="start_stop" onClick={handleStartStop}>start/stop</div>
            <div id="reset" onClick={handleReset}>Reset</div>
          </div>
      </div>
      </main>
  );
}

export default App;
