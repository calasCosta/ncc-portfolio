import tecnologies from "../Techs";
import Skill from "./Skill.js";


export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className='divInsideSection' style={{textAlign: 'center'}}>

        {
          Object.keys(tecnologies)
          .filter(t => tecnologies[t].name !== "Android Studio" && tecnologies[t].name !== "Firebase")
          .map((t, index) =>
            <Skill 
              key={index}  
              className="skill" 
              name={tecnologies[t].name} 
              img={tecnologies[t].icon} 
            />
          )
        }

      </div>
    </section>
  )
}
