import React from 'react';
import Footer from '../components/Footer';
import dataSet from '../components/ProjectDataSet';
import { useNavigate } from 'react-router-dom';

export default function Project() {
  const pathname = window.location.hash;
  const index = pathname.split("/")[2];
  const projectObj = dataSet[index];

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
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
