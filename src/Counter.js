import React, { useState } from 'react'
import './scss/main.scss'


const Counter = () => {
  const [isDone, setIsDone] = useState(0);
  
  return (
    <div>
      <p>{isDone}</p>
      <ul>
        <li>
          <button onClick={() => setIsDone(isDone - 10)}>
            -10
          </button>
        </li>
        <li>
          <button onClick={() => setIsDone(isDone - 1)}>
            -1
          </button>
        </li>
        <li>
          <button onClick={() => setIsDone(isDone - isDone)}>
            recet
          </button>
        </li>
        <li>
          <button onClick={() => setIsDone(isDone + 1)}>
            +1
          </button>
        </li>
        <li>
          <button onClick={() => setIsDone(isDone + 10)}>
            +10
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Counter