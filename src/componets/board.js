import React from 'react'
import Square from './square'
import styled from 'styled-components'

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 5em auto 0;
  width: 144px;
`

function Board() {
  return(
    <StyledBoard>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </StyledBoard>
  )
}

export default Board
