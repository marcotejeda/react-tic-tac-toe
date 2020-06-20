import React from 'react'
import Header from './componets/header'
import Board from './componets/board'

function App() {
  
  const sl = [1,2,3,4,5,6,7,8,9]

  function handeClick(i) {
    console.log(i)
  }

  return (
    <>
      <Header/>
      <Board
        squares={sl}
        onClick={(i) => handeClick(i)}
      />
    </>
  );
}

export default App;
