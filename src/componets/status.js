import React from 'react'
import styled from 'styled-components'

const StyleStatus = styled.div`
  font-size: 1.5em;
  margin: 1.5em auto;
  text-align: center;
`

function Status(props) {

  return(
    <StyleStatus>
      Next player: X
    </StyleStatus>
  )
}

export default Status