import React from 'react';
import javaIcon from '../images/javaIcon.png';
import javascriptIcon from '../images/javascriptIcon.png';
import pyIcon from '../images/pythonIcon.png';
import msqlServerIcon from '../images/msqlServerIcon.png';
import mysqlIcon from '../images/mysqlIcon.png';
import htmlIcon from '../images/htmlIcon.png';
import cssIcon from '../images/cssIcon.png';
import reactIcon from '../images/reactIcon.png';
import ejsIcon from '../images/ejsIcon.png';
import expressIcon from '../images/express-jsIcon.png';
import gitIcon from '../images/gitIcon.png';
import githubIcon from '../images/githubIcon.png';
import jdbcIcon from '../images/jdbcIcon.png';

function Skill(props){
  return (
    <article style={{textAlign: "center", display:"inline-block", margin:"4%"}}>
      <img src={props.img} alt={props.name} className="skill-icon" />
      <p className={props.className}> {props.name} </p>
    </article>
  );
}

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className='divInsideSection' style={{textAlign: 'center'}}>
        <Skill  className="skill" name="Java" img={javaIcon} />
        <Skill  className="skill" name="JavaScript" img={javascriptIcon} />
        <Skill  className="skill" name="HTML" img={htmlIcon} />
        <Skill  className="skill" name="CSS" img={cssIcon} />
        <Skill  className="skill" name="React" img={reactIcon} />
        <Skill  className="skill" name="Python" img={pyIcon} />
        <Skill  className="skill" name="MSQLServer" img={msqlServerIcon} />
        <Skill  className="skill" name="MySQL" img={mysqlIcon} />
        <Skill  className="skill" name="EJS" img={ejsIcon} />
        <Skill  className="skill" name="Express.js" img={expressIcon} />
        <Skill  className="skill" name="Git" img={gitIcon} />
        <Skill  className="skill" name="GitHub" img={githubIcon} />
        <Skill  className="skill" name="JDBC" img={jdbcIcon} />
      </div>
    </section>
  )
}
