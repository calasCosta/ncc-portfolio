import React from 'react'
import profile from '../images/profile.jpg';
import emailIcon from '../images/emailIcon.png';
import phoneIcon from '../images/phoneIcon.png';
import downArrow from '../images/downArrow.png';
import linkedInIcon from '../images/linkedInIcon.png';
import cvIcon from '../images/cv.png';
import cvNoamiCosta from "../components/CV_NoamiCosta.pdf";

export default function HeroArea() {
  return (
    <main>
        <div className='div-main'>
            <div className='left'>
                <img className='profile-photo' src={profile} alt='hero-img' />
            </div>
            <div className='right'>
                <h3 className='h3-main'> Hello, my name is Noami Costa </h3>
                <h1 className='h1-main'> I'm a software engineer </h1>
                <h3 className='h3-main'> I enjoy to code and learning new things </h3>   
                <h4 className='h4-main'> Feel free to contact me </h4>

                <a href='mailto:noamicafft@gmail.com' className='email contact'> 
                    <img className='email-icon' src={emailIcon} alt='email-icon' />
                </a>       
                <a href='tel:+5511999999999' className='phone contact'>
                    <img className='phone-icon' src={phoneIcon} alt='phone-icon' />
                </a>   
                <a href='https://www.linkedin.com/in/noami-costa-912a8518a/' target='blank' className='linkedIn contact'>
                    <img className='linkedIn-icon' src={linkedInIcon} alt='linkedIn-icon' />
                </a>  
                <a href={cvNoamiCosta} target="_blank" className='cvIn contact' download={"CV_NoamiCosta"}> 
                    <img src={cvIcon} alt="resume"/>
                </a>
            </div>

            <img className='down-arrown' src={downArrow} alt='downArrow-icon' />
        </div>
    </main>
  )
}
