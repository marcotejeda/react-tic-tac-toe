import React, {useState} from 'react'
import Header from './componets/header'
import Board from './componets/board'

function App() {
  
  const [useSquaresList, setSquaresList] = useState(Array(9).fill(null))
  const [useIsNextPlay, setIsNextPlay] = useState(true)

  function handeClick(i) {
    const squaresList = useSquaresList
    if(squaresList[i]){
      return
    }
    setIsNextPlay(!useIsNextPlay)
    squaresList[i] = useIsNextPlay ? 'X' : 'O'
    setSquaresList(squaresList)
  }

  return (
    <>
      <Header/>
      <Board
        squaresList={useSquaresList}
        onClick={(i) => handeClick(i)}
      />
    </>
  );
}

export default App;
