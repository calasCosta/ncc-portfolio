import React from 'react'
import '../styles/Header.scss';

export default function header(props) {
  return (
    <header style={{backgroundColor:`${props.backgroundColor}`}}>
      <div className='headerDiv'>
        <h2>Portfolio NCC</h2>

        <input type="checkbox" id="check"/>
        <label for="check" className="checkButton">
          <div></div>
          <div></div>
          <div></div>
        </label>

        <nav className='menu'>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
