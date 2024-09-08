import React,{ useState, useEffect } from 'react';
import './styles.css';


function App() {
  const [string, setString] = useState('');
  const playSound = (audioId) => {
    const audio = document.getElementById(audioId);
    if(audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    handleClick(key);
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    };

  }, [])

  function handleClick(audioId, description) {
    setString(description);
    playSound(audioId);
  }

  return (
    <>
    <div id="drum-machine">
      <div id="display">{string}</div>
      <div className="wrapper">
      <div id='heater1' className="drum-pad"  onClick={() => handleClick('Q', 'Heater 1')}>
        <audio className='clip' id='Q' src='media\Heater-1.mp3'></audio>
        Q
      </div>
      <div id='heater2' className="drum-pad" onClick={() => handleClick('W', 'Heater 2')}>
        <audio className='clip' id='W' src='media\Heater-2.mp3'></audio>
        W
      </div>
      <div id='heater3' className="drum-pad" onClick={() => handleClick('E', 'Heater 3')}>
        <audio className='clip' id='E' src='media\Heater-3.mp3'></audio>
        E
      </div>
      <div id='heater4' className="drum-pad" onClick={() => handleClick('A', 'Heater 4')}>
        <audio className='clip' id='A' src='media\Heater-4.mp3'></audio>
        A
      </div>
      <div id='clap' className="drum-pad" onClick={() => handleClick('S', 'Clap')}>
        <audio className='clip' id='S' src='media\clap.mp3'></audio>
        S
      </div>
      <div id='open-hh' className="drum-pad" onClick={() => handleClick('D', 'Open-HH')}>
        <audio className='clip' id='D' src='media\open-HH.mp3'></audio>
        D
      </div>
      <div id='kick-n-hat' className="drum-pad" onClick={() => handleClick('Z', `Kick-n'-Hat`)}>
        <audio className='clip' id='Z' src='media\Kick_n_Hat.mp3'></audio>
        Z
      </div>
      <div id='kick' className="drum-pad" onClick={() => handleClick('X', 'Kick')}>
        <audio className='clip' id='X' src='media\kick.mp3'></audio>
        X
      </div>
      <div id='closed-hh' className="drum-pad" onClick={() => handleClick('C', 'Closed-HH')}>
        <audio className='clip' id='C' src='media\closed-HH.mp3'></audio>
        C
      </div>
      </div>
    </div>
    </>
  )
}

export default App
