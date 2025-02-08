import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../assets/check-mark-light.svg'
import checkMarkDark from '../../assets/check-mark-dark.svg'
import SkillsList from '../../common/SkillsList'
import { useTheme } from '../../common/themeContext'
import {motion} from 'framer-motion'


function Skills() {
    const { theme } = useTheme();  // Assuming theme context for theme toggle
    const checkMarkIcon = theme === 'light' ? checkMarkDark : checkMarkLight;
    
        const skillList = [
        'Python', 'Django', 'Django REST Framework', 'SQL & No SQL', 'MongoDB', 'PostgreSQL',
        'JavaScript (ES6+)', 'React Js', 'FAST API', 'GIT & GITHUB', 'NLTK', 'Docker',
        'Figma', 'Bootstrap', 'HTML', 'CSS'
        ];
    
        return (
        <section id="skills" className={styles.Cont}>
            <h1 className="sectionTitle">SKILLS</h1>
            <div className={styles.skillList}>
            {skillList.map((skill, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}  // Start off-screen with low opacity
                whileInView={{ opacity: 1, y: 0 }}    // Animate when in view
                viewport={{ once: true }}  //
                transition={{
                 delay: index * 0.2,  // Stagger the animation delay based on index
                 duration: 0.5,        // Duration for the animation to complete
                }}>
                <SkillsList src={checkMarkIcon} skill={skill} />
            </motion.div>
            ))}
            </div>
        </section>
        );
    }
    
    export default Skills;