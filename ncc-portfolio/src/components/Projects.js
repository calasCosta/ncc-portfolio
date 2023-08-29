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
          <a href={`/project/${props.index}/${props.title}`} target='blank'  className="seeMore">see more</a>
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
                index={ds.indexOf(p)}
                title={p.title} 
                description={p.description}
          /> 
      )}      
      </div>
    </section>
  )
}
