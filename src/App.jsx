import Navbar from './Sections/NavBar/Navbar'
import Hero from './Sections/Hero/Hero'
import './App.css'
import Projects from './Sections/Projects/Projects'
import Skills from './Sections/Skills/Skills'
import Contact from './Sections/Contact/Contact'
import Footer from './Sections/Footer/Footer'
import AboutMe from './Sections/AboutMe/AboutMe'
import Services from './Sections/Services/Services'

function App(){


  return(<>
      <Navbar/>
      <Hero/>
      <Services/>
      <Projects/>
      <AboutMe/>
      <Skills/>
      <Contact/>
      <Footer/>
      
  </>)
}



export default App
