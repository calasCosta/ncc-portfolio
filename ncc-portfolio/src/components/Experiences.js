import React from 'react';



function ExperienceArticle(props){
    return (
      <article>
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
        <ExperienceArticle experience="One Semester of Java Intership at Capgemini - Lisbon"/>
        <ExperienceArticle experience={"One semester as an advisor for Programming project at \"Liceu Politécnico SOS - Bissau (Guinea-Bissau) \""} />
      </div>
    </section>
  )
}
