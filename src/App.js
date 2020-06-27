import React, {useState} from 'react'
import Header from './componets/header'
import Board from './componets/board'
import Status from './componets/status'
import History from './componets/history'

function App() {
  
  const [useHistory, setHistory] = useState({
    squaresList: Array(9).fill(null),
    squareSelected: null
  })
  const [useStepNumber, setStepNumber] = useState(0)
  const [useIsNextPlay, setIsNextPlay] = useState(true)
  const [useThereWinner, setThereWinner] = useState(false)
  const [useStatus, setStatus] = useState('Next Player: X')

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
    if(useThereWinner || useHistory.squaresList[i]) return

    const squares = useHistory.squaresList
    squares[i] = useIsNextPlay ? 'X' : 'O'
    setHistory({
      ...useHistory,
      squaresList: squares
    })

    const winner = calculateWinner(useHistory.squaresList)
    if(winner) {
      setThereWinner(winner.lines)
      setStatus('Winner: ' + winner.winner)
    } else {
      setStatus('Next Player: ' + (useIsNextPlay ? 'O' : 'X'))
    }

    setIsNextPlay(!useIsNextPlay)
  }

  return (
    <>
      <Header/>
      <Status
        statusText={useStatus}
      />
      <Board
        squaresList={useHistory.squaresList}
        onClick={(i) => handeClick(i)}
        winner={useThereWinner}
      />
      <History/>
    </>
  );
}

export default App;
