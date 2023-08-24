import React from 'react'
import dataSet from './ProjectDataSet';


function Project(props){
  const description = props.description;
  return(
    <div className="project">
      <h4>{props.title}</h4>
      { (description.length > 200) ?
        <p> {description.slice(0,200)}...</p> :
        <p>{description}</p>
      }
      {
        (description.length > 200) &&
          <p className="seeMore">see more</p>
      }
      
    </div>
  );
}


export default function Projects() {

  const ds = dataSet;
  return (
    <section>
      <h2>Projects</h2>

      <div className="projectsDiv divInsideSection">
      {ds.map((p)=>
          <Project 
                title={p.title} 
                description={p.description}
          /> 
      )}      
      </div>
    </section>
  )
}
