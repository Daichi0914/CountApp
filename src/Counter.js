import React, { useState } from 'react'
import Button from './Button'
import './scss/main.scss'


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <ul>
        <li>
          {/* <button onClick={() => {setCount(count - 10)}}> */}
          {/* いつものアロー関数の、引数の後に使う{}は1行で書くときは省略できる↓↑ */}
            {/* -10 */}
          {/* </button> */}
        </li>
        <li>
          {/* <button onClick={() => setCount(count - 1)}>
            -1
          </button> */}
        </li>
        <li>
          {/* <button onClick={() => setCount(count - count)}>
            reset
          </button> */}
        </li>
        <li>
          {/* <button onClick={() => setCount(count + 1)}>
            +1
          </button> */}
        </li>
        <li>
          {/* <button onClick={() => setCount(count + 10)}>
            +10
          </button> */}
          <Button setCount={setCount} count={count} /> {/* 左辺は名前、右辺は式 */}
          {/* Button({setCount:setCount, count:count}) */}
        </li>
      </ul>
    </div>
  );
}

export default Counter