import React from 'react'
import profile from '../images/profile.jpg';
import emailIcon from '../images/emailIcon.png';
import phoneIcon from '../images/phoneIcon.png';
import downArrow from '../images/downArrow.png';
import linkedInIcon from '../images/linkedInIcon.png';
import cvIcon from '../images/cv.png';
import cvNoamiCosta from "../components/CV_NoamiCosta.pdf";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function HeroArea() {
  return (
    <main>
        <div className='div-main'>
            <div className='div-inside'>
                <h2 className='h2-name'> I'm Noami Costa </h2>
                <h1 className='h1-main'> Graduate Software Engineer </h1> 
                <h2 className='h2-whoami'>
                    I'm a passionate and dedicated fullstack software developer based in London.
                    
                </h2>

                <article className='links'>
                    <a href='mailto:noamicafft@gmail.com' className='email contact'> 
                        <img className='email-icon' src={emailIcon} alt='email-icon' />
                    </a>       
                    {/*<a href='tel:+351933320337' className='phone contact'>
                        <img className='phone-icon' src={phoneIcon} alt='phone-icon' />
                    </a>*/} 
                    <a href='https://www.linkedin.com/in/noami-costa-912a8518a/' target='blank' className='linkedIn contact'>
                        <img className='linkedIn-icon' src={linkedInIcon} alt='linkedIn-icon' />
                    </a>  
                    <a href={cvNoamiCosta} target="_blank" rel="noreferrer" className='cvIn contact' download={"CV_NoamiCosta"}> 
                        <img src={cvIcon} alt="resume"/>
                    </a> 
                </article>
            </div>

            <AnchorLink href="#experiences" className='down-arrow'>
                <img className='down-arrown' src={downArrow} alt='downArrow-icon' />            
            </AnchorLink>
                
            
        </div>
    </main>
  )
}
