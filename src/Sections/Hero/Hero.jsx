import React from 'react'
import styles from './Herostyles.module.css'
import heroimg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import xiconLight from '../../assets/xicon-light.svg'
import xiconDark from '../../assets/xicon-dark.svg'
import githubiconLight from '../../assets/githubicon-Light.svg'
import githubiconDark from '../../assets/githubicon-Dark.svg'
import instaiconLight from '../../assets/instaicon-light.svg'
import instaiconDark from '../../assets/instaicon-dark.svg'
import iniconLight from '../../assets/inicon-light.svg'
import iniconDark from '../../assets/inicon-dark.svg'
import RESUME from '../../assets/ULOKO-EMMANUEL-RESUME.pdf'
import { useTheme } from '../../common/themeContext'


function Hero() {

    const {theme, toggleTheme} = useTheme();

    const themeicon = theme === 'light' ? moon : sun
    const xicon = theme === 'light' ? xiconLight : xiconDark
    const githubicon = theme === 'light' ? githubiconLight : githubiconDark
    const instaicon = theme === 'light' ? instaiconLight : instaiconDark
    const inicon = theme === 'light' ? iniconLight : iniconDark




    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeCont}>
                <img 
                className={styles.hero} 
                src={heroimg} 
                alt="rex-profilepic" />

                <img 
                className={styles.themeMode}
                src={themeicon}
                alt="themeMode icon" onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>
                    Uloko
                    <br/> 
                    Emmanuel
                </h1>
                <h2>
                    Software Engineer | Backend
                </h2>
                <span>
                    <a href="https://x.com/therexcodes?s=21" target="_blank">
                    <img src={xicon} alt="x Icon" /></a>
                    <a href="https://github.com/therexcodes" target="_blank">
                    <img src={githubicon} alt="github Icon" /></a>
                    <a href="https://www.instagram.com/the.rex.codes/" target="_blank">
                    <img src={instaicon} alt="instagram Icon" /></a>
                    <a href="https://www.linkedin.com/in/emmanuel-uloko-825423343/" target="_blank">
                    <img src={inicon} alt="Linkedin Icon" /></a>
                </span>
                <p className={styles.description}>
                Passionate about building efficient backend systems with Django to drive modern web applications.
                </p>
                <a href={RESUME} download>
                    <button className='hover'>
                        Resume
                    </button> 
                </a>

            </div>
        </section>
    )
}

export default Hero
