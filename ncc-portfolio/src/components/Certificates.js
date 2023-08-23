import React from 'react'
import javaProgramming from "../images/certificates/certificate_javaProgramming.png"
import javaScript from "../images/certificates/certificate_javaScript.png"
import responsiveWebDesign from "../images/certificates/certificate_responsiveWebDesign.jpg"
import completeWebDev from "../images/certificates/certificate_completeWebDev.png"

function Certificate(props){
  return(
    <img 
      src={props.src} 
      width={400} 
      height={300}
      className='certificate' 
    />
  )
}


export default function Certificates() {
  return (
    <section>
      <h2>Certificates</h2>

      <div className='certificatesDiv'>
        <Certificate src={javaProgramming} />
        <Certificate src={javaScript} />
        <Certificate src={responsiveWebDesign} />
        <Certificate src={completeWebDev} />
      </div>
      
    </section>
  )
}
