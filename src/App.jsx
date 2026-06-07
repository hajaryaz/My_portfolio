import { useScrollReveal } from './hooks'
import StarCanvas  from './components/StarCanvas'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import Cursor     from './components/Cursor'

export default function App() {
  useScrollReveal()
  return (
    <>
      <Cursor />
      <div className="nebula" />
      <StarCanvas />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
