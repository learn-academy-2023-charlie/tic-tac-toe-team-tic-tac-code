import React, { useState } from 'react'
import Square from './components/Square'
import Button from './components/Buttons.js'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(0)
  const [x_arr, setX] = useState([])
  const [y_arr, setY] = useState([])

  const handleClick = (selectedIndex) => {
    const newSquares = [...squares]

    if (counter % 2 === 0 &&  !newSquares[selectedIndex]){
      newSquares[selectedIndex] = 'X'
      x_arr.push(selectedIndex)
      calculateWinner(x_arr)
      setCounter( counter + 1 )

    } else if (!newSquares[selectedIndex]) {
      newSquares[selectedIndex] = 'O'
      y_arr.push(selectedIndex)
      calculateWinner(y_arr)
      setCounter( counter + 1 )
      
    } else {
      newSquares[selectedIndex] = newSquares[selectedIndex]
    }
    if (!newSquares.includes(null)){
      alert("Game Over")
      return setTimeout(() => window.location.reload(), 1000)}
    setSquares(newSquares)
    return squares;
  }

  const calculateWinner = (Array) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++){
      if (lines[i].every(value => Array.includes(value))){
        alert("You won!")
        return setTimeout(() => window.location.reload(), 1000)
      } 
    }
  }
return (
  <>
      <h1>Tic Tac Toe</h1>
      <Square squares= {squares} handleClick = {handleClick} />
      <Button /> 
    </>
  )
}
  

export default App