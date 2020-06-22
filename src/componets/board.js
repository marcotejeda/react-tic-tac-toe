import React from 'react'
import Square from './square'
import styled from 'styled-components'

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 5em auto 0;
  width: 144px;
`

function Board(props) {
  
  const {squaresList, onClick, winner} = props
  const renderSquares = squaresList.map((value, i) => {

    let isWin = false
    for(var w = 0; w < winner.length; w++){
      if(winner && winner[w] === i) {
        isWin = true
      }
    }

    return(
      <Square 
        key={i}
        value={value}
        win={isWin}
        onClick={() => onClick(i)}
      />
    )
  })

  return(
    <StyledBoard>
      {renderSquares}
    </StyledBoard>
  )
}

export default Board
