import React from 'react'
import dataSet from './ProjectDataSet';
import { Link } from 'react-router-dom';


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
          <Link to={`/project/${props.index}/${props.title}`}  className="seeMore"
          >
            see more
          </Link>
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
