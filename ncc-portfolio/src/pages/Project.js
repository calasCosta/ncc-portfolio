import React from 'react';
import Footer from '../components/Footer';
import dataSet from '../components/ProjectDataSet';

export default function Project() {
  const pathname = window.location.pathname;
  const index = pathname.split("/")[2];
  const projectObj = dataSet[index];

  const goBack = () => {
    window.location.href = "http://localhost:3000/"
  }

  return (
    <div className='projectPageDiv'>
      <p onClick={goBack} className='goBack'> {`<<`} </p>
      <div >
        <h1>{projectObj.title}</h1>
        <p>{projectObj.description}</p>
      </div>
      {<Footer />}
    </div>
  )
}
