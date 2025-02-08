import styles from './AboutMe.module.css'
import { TypingAnimation } from "../../common/TypingAnimation"

function AboutMe() {

  return (
    <section id='about-me' className={styles.Cont}>
        <h1>ABOUT </h1>
        <p className={styles.description}> 
        <TypingAnimation>
        Hi, I’m <b>Emmanuel Uloko</b> —an Aerospace Engineer turned Software Developer passionate about building scalable and impactful applications. I specialize in Python, Django, AI-powered solutions, and web development with React and JavaScript to create dynamic user experiences. <br /> <br />

        Beyond coding, I’m a sci-fi enthusiast, a lover of cinematic scores, and a content creator sharing insights with the developer community. When I’m not immersed in tech, you’ll likely find me in the kitchen—because, yes, I’m also an interesting chef! <br/> <br />

        Let’s connect and build something amazing!</TypingAnimation>
        </p>

    </section>
  )
}

export default AboutMe
