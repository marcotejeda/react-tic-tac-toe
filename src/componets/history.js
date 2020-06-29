import React from 'react'
import styled from 'styled-components'

const StyleHistory = styled.div`
  text-align: center;
  margin: 1.5em auto;
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 0;
      button {
        margin: 0 0 .5em 0;
      }
    }
  }
`

function History(props) {

  const {onClick, history} = props
  const moves = history.map((step, move) => {
    const moveRow = Math.floor(history[move].squareSelected / 3) + 1
    const moveCol = (history[move].squareSelected % 3) + 1
    const desc = move ? 
        'Go to move #'+ move +' (ROW: '+ moveRow +', COL: '+ moveCol +')' : 
        'Go to game start'
    return(
      <li key={move}>
        <button onClick={() => onClick(move)}>
          {desc}
        </button>
      </li>)
  })



  return(
    <StyleHistory>
      <ul>
        {moves}
      </ul>
    </StyleHistory>
  )
}

export default History