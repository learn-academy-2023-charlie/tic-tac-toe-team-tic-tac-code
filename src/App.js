import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(0)
  const handleClick = (selectedIndex) => {
    const newSquares = [...squares]
    counter % 2 === 0 && !newSquares[selectedIndex] ? newSquares[selectedIndex] = 'x': newSquares[selectedIndex] = 'o'

    setSquares(newSquares)
    setCounter( counter +1 )
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares= {squares} handleClick = {handleClick} />
    </>
  )
}

export default App