import React from 'react'
import javaProgramming from "../images/certificates/certificate_javaProgramming.png"
import javaScript from "../images/certificates/certificate_javaScript.png"
import responsiveWebDesign from "../images/certificates/certificate_responsiveWebDesign.jpg"
import completeWebDev from "../images/certificates/certificate_completeWebDev.png"
import devOps from "../images/certificates/certificate_devOps.png"

function Certificate(props){
  return(
    <a href={props.src} target='blank'>
      <img src={props.src} className='certificate' alt='certificate' />
    </a>
  )
}


export default function Certificates() {
  return (
    <section id="certificates">
      <h2>Certificates</h2>

      <div className='certificates-div div-inside-section'>
        <Certificate src={devOps} />
        <Certificate src={javaProgramming} />
        <Certificate src={javaScript} />
        <Certificate src={responsiveWebDesign} />
        <Certificate src={completeWebDev} />
      </div>
      
    </section>
  )
}
