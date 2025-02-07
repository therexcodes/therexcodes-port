import React from 'react'
import styles from './ProjectsStyles.module.css'
import rmjapp from '../../assets/r-mjapp.png'
import chatbot from '../../assets/r-chatbot.png'
import ProjectsCard from '../../common/ProjectsCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsCont}>
            <ProjectsCard src={chatbot} 
                link='https://github.com/therexcodes/R-Chatbot-w-Django' 
                h3='R-Chatbot App' 
                p='An AI Web Application' 
                alt='R-Chatbot App'
            />
            <ProjectsCard src={rmjapp} 
                link='https://github.com/therexcodes/R-movie-Journal-App' 
                h3='R-Movie-Journal App' 
                p='A Django Based  Movie Review Web Application' 
                alt='R-Movie-Journal App'
            />
            
        </div>
    </section>
  )
}

export default Projects
 