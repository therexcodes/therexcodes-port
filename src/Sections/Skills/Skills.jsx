import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../assets/check-mark-light.svg'
import checkMarkDark from '../../assets/check-mark-dark.svg'
import SkillsList from '../../common/SkillsList'
import { useTheme } from '../../common/themeContext'


function Skills() {
    const {theme, toggleTheme} = useTheme()
    
    const checkMarkIcon = theme === 'light' ? checkMarkDark : checkMarkLight


    return (
        <section id='skills' className={styles.Cont}>
            <h1 className='sectionTitle'>SKILLS</h1>
            <div className={styles.skillList}>
                <SkillsList  src={checkMarkIcon} skill='Python'/>
                <SkillsList  src={checkMarkIcon} skill='Django'/>
                <SkillsList  src={checkMarkIcon} skill='Django REST Framework'/>
                <SkillsList  src={checkMarkIcon} skill='SQL & No SQL'/>
                <SkillsList  src={checkMarkIcon} skill='MangoDB'/>
                <SkillsList  src={checkMarkIcon} skill='PostgreSQL'/>
                <hr />
                <SkillsList  src={checkMarkIcon} skill='Javascript (ES6+)'/>
                <SkillsList  src={checkMarkIcon} skill='React Js'/>
                <SkillsList  src={checkMarkIcon} skill='FAST API'/>
                <SkillsList  src={checkMarkIcon} skill='GIT & GITHUB'/>
                <SkillsList  src={checkMarkIcon} skill='NLTK'/>
                <SkillsList  src={checkMarkIcon} skill='Docker'/>
                <hr />
                <SkillsList  src={checkMarkIcon} skill='Figma'/>
                <SkillsList  src={checkMarkIcon} skill='Bootstrap'/>
                <SkillsList  src={checkMarkIcon} skill='HTML'/>
                <SkillsList  src={checkMarkIcon} skill='CSS'/>
            </div>

        </section>
    )
}

export default Skills
