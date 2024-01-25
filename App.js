import './App.css';
import { useState,useEffect } from 'react';
import { Logo } from './Logo.js';
import { Description } from './Description.js';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(c => c + 1);
    }, 600);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Description />
        <div>
          <p>
            今日は、Reactの勉強をしようと決意します。思ってから{count}秒。
          </p>
        </div>
      </header>
    </div>
  );
}