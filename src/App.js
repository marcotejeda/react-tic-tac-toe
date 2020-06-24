import React, {useState} from 'react'
import Header from './componets/header'
import Board from './componets/board'
import Status from './componets/status'

function App() {
  
  const [useSquaresList, setSquaresList] = useState(Array(9).fill(null))
  const [useIsNextPlay, setIsNextPlay] = useState(true)
  const [useThereWinner, setThereWinner] = useState(false)

  function calculateWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] 
        && squares[a] === squares[b] 
        && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          lines: lines[i] 
        }
      }
    }
    return null;
  }

  function handeClick(i) {
    if(useThereWinner || useSquaresList[i]) return

    const squares = useSquaresList
    squares[i] = useIsNextPlay ? 'X' : 'O'
    setSquaresList(squares)

    const winner = calculateWinner(useSquaresList)
    if(winner) setThereWinner(winner.lines)

    setIsNextPlay(!useIsNextPlay)
  }

  return (
    <>
      <Header/>
      <Status/>
      <Board
        squaresList={useSquaresList}
        onClick={(i) => handeClick(i)}
        winner={useThereWinner}
      />
    </>
  );
}

export default App;
