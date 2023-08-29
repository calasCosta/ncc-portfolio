import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dataSet from '../components/ProjectDataSet';

export default function Project() {
  const pathname = window.location.pathname;
  const index = pathname.split("/")[2];
  const projectObj = dataSet[index];
  return (
    <div>
      <Header backgroundColor="rgba(83, 183, 203, 0.214)"/>
      <div className='projectPageDiv'>
        <h1>{projectObj.title}</h1>
        <p>{projectObj.description}</p>
      </div>
      <Footer />
    </div>
  )
}
