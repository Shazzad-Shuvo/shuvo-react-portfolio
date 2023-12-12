
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import ExperienceAndEducation from './components/ExperienceAndEducation'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='bg-cyan-950'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ExperienceAndEducation/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
