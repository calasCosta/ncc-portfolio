import React from 'react';



function ExperienceArticle(props){
    return (
      <article className="articleExperience">
        <p className="experience">{props.experience}</p>
      </article>
    );
}

export default function Experience() {

  return (
    <section className='experienceSection'>
      <h2>Experiences</h2>
      <div className="experiencesDiv"> 

        <ExperienceArticle experience="Former Chairman of the Board of Directors in the government organization Children’s Parliament of Guinea-Bissau. (2014-2016)" />
        <ExperienceArticle experience= "One Semester of Participation in the Erasmus+ Exchange in Poland." />
        <ExperienceArticle experience="Development of a full-Stack webapp for a private startup as a freelancer."/>
        <ExperienceArticle experience="One Semester of Java Internship at Capgemini - Lisbon"/>
        <ExperienceArticle experience={"One quadrimester as an advisor for Programming project at \"Liceu Politécnico SOS - Bissau (Guinea-Bissau) \""} />
      </div>
    </section>
  )
}
