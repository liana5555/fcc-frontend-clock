import down from './arrow-down-solid.svg';
import up from './arrow-up-solid.svg';
import './App.css';



function App() {

  return (
    <main>
      <h1>25 + 5 Clock</h1>
      <div className='break_session_container'>
        <div className='break_container'>
          <div id='break-label'>Break Length</div>
          <div className='break_counter_container'>
            <div id="break-decrement"><img src={down} alt="decrement break length"/></div>
            <div id="break-length">5</div>
            <div id="break-increment"><img src={up} alt="increment break length"/></div>

          </div>
        </div>
        <div className='session_length_container'>
          <div id='session-label'>Session Length</div>
          <div className='session_counter_container'>
            <div id="session-decrement"><img src={down} alt="decrement break length"/></div>
            <div id="session-length">25</div>
            <div id="session-increment"><img src={up} alt="increment break length"/></div>

          </div>
        </div>
       
      </div>

      <div className='session_container'>
          <div id="timer-label">Session</div>
          <div id="timer-left">25:00</div>
          <div className='button_container'>
            <div id="start_stop">start/stop</div>
            <div id="reset">Reset</div>
          </div>
      </div>
      </main>
  );
}

export default App;
