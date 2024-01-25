import './App.css';
import { useState,useEffect } from 'react';
import { Logo } from './Logo.js';
import { Description } from './Description.js';

export default function App() {
  const [count, setCount]           = useState(0);
  const [resetCount, setResetCount] = useState(0);
  const [beforeResetCount, setBeforeResetCount] = useState(0);

  function buttonClick(){
    setResetCount(resetCount + 1);

  }

  useEffect(() => {
    if(beforeResetCount !== resetCount){
      setCount(0);
      setBeforeResetCount(beforeResetCount);
    }
    const intervalId = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [resetCount]);

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Description />
        <div>
          <p>
            今日は、Reactの勉強をしようと決意します。思ってから{count}秒。
          </p>
          <p>
            思い直した回数{resetCount}回。
          </p>

          <button className="button" onClick={buttonClick}>やっぱりやめる</button>
        </div>
      </header>
    </div>
  );
}