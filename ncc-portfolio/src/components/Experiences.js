import React from 'react';



function ExperienceArticle(props){
    return (
      <article className="articleExperience">
        <p className="experience">{props.experience} <br/> {props.duration}</p>
      </article>
    );
}

export default function Experience() {

  return (
    <section className='experienceSection' id="experiences">
      <h2>Experiences</h2>
      <div className="experiencesDiv" > 

        <ExperienceArticle 
          experience={"Advisor for Programming Projects at Polytechnic Hight School SOS - Bissau/Guinea-Bissau"} 
          duration="(03/2023 – Present)"
        />

        <ExperienceArticle 
          experience="Java Internship at Capgemini - Lisbon"
          duration="(06/2022 – 12/2022)"
        />

        <ExperienceArticle experience="Development of a full-Stack webapp for a private startup as a freelancer."
          duration="(04/2021 – 05/2021)"
        />

        <ExperienceArticle experience= "One Semester of Participation in the Erasmus+ Exchange in Poland." />

        <ExperienceArticle 
          experience="Former Chairman of the Board of Directors in the government organization Children’s Parliament of Guinea-Bissau." 
          duration="(2014-2016)"
        />
        
        
        
        
      </div>
    </section>
  )
}
