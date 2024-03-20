import React from 'react';

export default function Skill(props){
    return (
      <article style={{textAlign: "center", display:"inline-block", margin:"4%"}}>
        <img 
            src={props.img} 
            alt={props.name} 
            className="skill-icon" 
        />
        <p className={props.className}> 
            {props.name} 
        </p>
      </article>
    );
  }