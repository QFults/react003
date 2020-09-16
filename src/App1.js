import React, { useState } from 'react'

const App = () => {

  const [countState, setCountState] = useState({
    count: 0,
    message: 'Hello'
  })

  countState.handleIncrement = () => {
    setCountState({ ...countState, count: countState.count + 1 })
  }

  countState.handleDecrement = () => {
    setCountState({ ...countState, count: countState.count - 1 })
  }

  countState.handleReset = () => {
    setCountState({ ...countState, count: 0 })
  }

  return (
    <>
      <h1>{countState.message}</h1>
      <h1>Count: {countState.count}</h1>
      <button onClick={countState.handleIncrement}>+</button>
      <button onClick={countState.handleDecrement}>-</button>
      <button onClick={countState.handleReset}>RESET</button>
    </>
  )
}

export default App
