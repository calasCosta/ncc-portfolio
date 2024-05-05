import React from 'react'
import '../styles/Header.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function header(props) {

  /**
   * unchecked the input checked state
   */
  const handleClick = ()=>{
    const check = document.querySelector('#check');
    check.checked = false;
  }

  return (
    <header style={{backgroundColor:`${props.backgroundColor}`}}>
      <div className='header-div'>
        <h2>Portfolio NCC</h2>

        <input type="checkbox" id="check"/>
        <label for="check" className="check-button">
          <div></div>
          <div></div>
          <div></div>
        </label>

        <nav className='menu'>
          <AnchorLink href="#skills" onClick={handleClick}>Skills</AnchorLink>
          <AnchorLink href="#experiences" onClick={handleClick}>Experiences</AnchorLink>
          <AnchorLink href="#projects" onClick={handleClick}>Projects</AnchorLink>
          <AnchorLink href="#certificates" onClick={handleClick}>Certificates</AnchorLink>
        </nav>
      </div>
    </header>
  )
}
