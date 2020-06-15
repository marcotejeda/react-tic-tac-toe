import React from 'react'
import logo from './../assets/logo.svg'

function Header(){
  return(
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Challenge from React.</p>
    </header>
  )
}

export default Header