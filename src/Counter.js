import React, { useState } from 'react'
import './scss/main.scss'


const Counter = () => {
  const [isDone, setIsDone] = useState(0);

  return (
    <div>
      <p>{isDone}</p>
      <ul>
        <li>
          <button onClick={() => {setIsDone(isDone - 10)}}> {/* いつものアロー関数の、引数の後に使う{}は省略できる？↓↑ {setIsDone()} と setIsDone() でちらでも可？  */}
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