import React from 'react'

export default function header(props) {
  return (
    <header style={{backgroundColor:`${props.backgroundColor}`}}>
      <div className='headerDiv'>
        <h2>Portfolio NCC</h2>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
