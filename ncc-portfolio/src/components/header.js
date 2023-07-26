import React from 'react'

export default function header() {
  return (
    <header>
      <div className='headerDiv'>
        <h1>Logo</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
