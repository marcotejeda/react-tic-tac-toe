import React, {useEffect, useState} from 'react'
import {calculateWinner} from './helpers'
import Header from './componets/header'
import Board from './componets/board'
import Status from './componets/status'
import History from './componets/history'

function App() {
  
  const [useHistory, setHistory] = useState([{
    squaresList: Array(9).fill(null),
    squareSelected: null
  }])
  const [useStep, setStep] = useState(0)
  const [useIsNextPlay, setIsNextPlay] = useState(true)
  const [useThereWinner, setThereWinner] = useState(false)
  const [useStatus, setStatus] = useState('Next Player: X')

  function handeClick(i) {
    const selected = useHistory[useStep].squaresList[i]
    if(useThereWinner || selected) return

    const history = useHistory.slice(0, setStep(useStep + 1))
    const current = history[history.length - 1]
    const squares = current.squaresList.slice()
    squares[i] = useIsNextPlay ? 'X':'O'

    setHistory(history.concat({
      squaresList: squares,
      squareSelected:i
    }))
    setIsNextPlay(!useIsNextPlay)
  }

  useEffect(() => {
    const current = useHistory[useStep]
    const winner = calculateWinner(current.squaresList)
    if(winner) {
      setThereWinner(winner.lines)
      setStatus('Winner: ' + winner.winner)
    } else {
      setStatus('Next Player: ' + (useIsNextPlay ? 'O' : 'X'))
    }
  }, [useHistory, useStep, useIsNextPlay]);

  return (
    <>
      <Header/>
      <Status
        statusText={useStatus}
      />
      <Board
        squaresList={useHistory[useStep].squaresList}
        onClick={(i) => handeClick(i)}
        winner={useThereWinner}
      />
      <History/>
    </>
  );
}

export default App;
