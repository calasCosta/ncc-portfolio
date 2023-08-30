import React from 'react'
import dataSet from './ProjectDataSet';
import { NavLink } from 'react-router-dom';


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
          <NavLink to={`/ncc-portfolio/project/${props.index}/${props.title}`} target='blank'  className="seeMore"
          >
            see more
          </NavLink>
      }
      
    </div>
  );
}

export default function Projects() {

  const ds = dataSet;
  return (
    <section id="projects">
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
