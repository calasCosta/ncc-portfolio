import React from 'react'
import profile from '../images/profile.jpg';
import emailIcon from '../images/emailIcon.png';
import phoneIcon from '../images/phoneIcon.png';

export default function HeroArea() {
  return (
    <main>
        <div className='div-main'>
            <div className='left'>
                <img className='profile-photo' src={profile} alt='hero-img' />
            </div>
            <div className='right'>
                <h2 className='h1-main'> Hello, my name is Noami Costa </h2>
                <h1 className='h2-main'> I'm a software engineer </h1>
                <h3 className='h3-main'> I enjoy to code and learning new things </h3>   
                <h4 className='h4-main'> Feel free to contact me </h4>
                <a href='mailto:noamicafft@gmail.com' className='email'> 
                    <img className='email-icon' src={emailIcon} alt='email-icon' />
                </a>       
                <a href='tel:+5511999999999' className='phone'>
                    <img className='phone-icon' src={phoneIcon} alt='phone-icon' />
                </a>      
            </div>
        </div>
    </main>
  )
}
