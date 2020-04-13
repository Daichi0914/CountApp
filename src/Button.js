import React from 'react'


const Button = (props) => {
  return (
    <ul>
      <li>
        <button onClick={() => props.setCount(props.count - 10)}>
          -10
        </button>
      </li>
      <li>
        <button onClick={() => props.setCount(props.count - 1)}>
          -1
        </button>
      </li>
      <li>
        <button onClick={() => props.setCount(props.count - props.count)}>
          recet
        </button>
      </li>
      <li>
        <button onClick={() => props.setCount(props.count + 1)}>
          +1
        </button>
      </li>
      <li>
        <button onClick={() => props.setCount(props.count + 10)}>
          +10
        </button>
      </li>
    </ul>
  )
}

export default Button