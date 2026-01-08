import './App.css'
import Experience from './components/List'
import Header from './components/Header'
import Projects from './components/Projects'
import Section from './components/Section'
import List from './components/List'
import content from './content.json'
import Contact from './components/Contact'
import About from './components/About'

function App() {

  return (
    <>
      <Header />
    <main className="container mx-auto px-4 sm:px-6 lg:px-32 font-sans">
      <Section title="Featured Work">
        <Projects />
      </Section>
      <Section title="Experience Snapshot">
        <List list={content.experienceSnapshot} position='center' />
      </Section>
      <Section title="Tech Stack">
        <List list={content.techStack} position='center' />
      </Section>
      <Section title="About Me">
        <About />
      </Section>
      <Section title="Let's Connect">
        <Contact />
      </Section>
    </main>
    </>
  )
}

export default App
