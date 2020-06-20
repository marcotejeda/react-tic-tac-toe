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
  
  const {squares, onClick} = props
  const renderSquares = squares.map((i) =>
    <Square 
      key={i}
      value={i}
      win={true}
      onClick={() => onClick(i)}
    />
  )
  
  return(
    <StyledBoard>
      {renderSquares}
    </StyledBoard>
  )
}

export default Board
