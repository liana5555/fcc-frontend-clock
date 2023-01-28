import down from './arrow-down-solid.svg';
import up from './arrow-up-solid.svg';
import './App.css';
import React from 'react';



function App() {
  //let d = new Date();

  let start;
  let end;
  let minutes;
  let seconds;


  const [state, setState] = React.useState({
                                              breakLength: 5,
                                              sessionLength: 25,
                                              remaining: "25:00", 
                                              ongoing: false, 
                                              state: "session",
                                              remain_in_s: 1500
  })


React.useEffect(()=> {
  
/*
    const interval = setInterval(() => {
      if (state.ongoing) {
        console.log("This is working: ")
      setState(prev => {
      return ({
        ...prev, remaining: (creating_string(minutes, seconds))
      })
  
    })
    start = start.getTime() + 1000
  }
  }, 1000);

  
 return () => {
    clearInterval(interval);
  }; */


  const interval = setInterval(() => 
  {
  if (state.ongoing) {
    setState((prev) => {
      return ({
        ...prev, 
        remain_in_s: (prev.remain_in_s - 1)
      })
     })
     console.log(state)
  }
  else {
    console.log("not updating")
    console.log(state)
  }
   
  }, 1000);
  return () => {
    clearInterval(interval);
  };
}, [])


  

  function handleReset () {

    setState(prev=> {
      return (
        {...prev, 
          breakLength: 5,
          sessionLength: 25, 
          remaining: "25:00",
          ongoing: false,
          state: "session",
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
  
        


 

  }
  function creating_string(minutes, seconds) {

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
          ongoing: (!prev.ongoing)
        }
      )
    })
  }
  /*  console.log(state)

    if (state.state === "session"){
      console.log(state)
      start = new Date(Date.now())
      end = new Date(start.getTime() + (state.sessionLength)*60*1000)

      minutes = ((end.getTime() - start.getTime())/1000)/60
      seconds = ((end.getTime() - start.getTime())/1000)%60 
  /*  const start = new Date(Date.now())
      console.log(start)
     

      const end= new Date(start.getTime() + (state.sessionLength)*60*1000)
      console.log(end)

      let minutes = ((end.getTime() - start.getTime())/1000)/60
      let seconds = ((end.getTime() - start.getTime())/1000)%60 
      

      console.log("remaining time " + creating_string(minutes,seconds))

      

  
   
     while (minutes !== 0 && seconds >= 0) {
        let currenttime = new Date(Date.now())
        minutes = Math.floor(((end.getTime() - currenttime.getTime())/1000)/60)
        seconds = Math.floor(((end.getTime() - currenttime.getTime())/1000)%60)
        if (((end.getTime() - currenttime.getTime())%1000) === 0) {
            let remain = (creating_string(minutes, seconds))
            console.log(remain)
            console.log(state)
              setState(prev => {
                return (
                  {
                  ...prev, remaining: remain
                }
                )
              })
            }
            
        }    
  
*/



    

  

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
          <div id="timer-label">Session</div>
          <div id="time-left">{state.remaining}</div>
          <div className='button_container'>
            <div id="start_stop" onClick={handleStartStop}>start/stop</div>
            <div id="reset" onClick={handleReset}>Reset</div>
          </div>
      </div>
      </main>
  );
}

export default App;
