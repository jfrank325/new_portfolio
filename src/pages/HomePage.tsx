import Header from '../components/Header'
import Projects from '../components/Projects'
import Section from '../components/Section'
import List from '../components/BulletList'
import content from '../content.json'
import Contact from '../components/Contact'
import About from '../components/About'
import TechStackFull from '../components/TechStackFull'

const HomePage = () => {
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
                <TechStackFull techStackFullContent={content.techStack} />
                <Section title="About Me">
                    <About />
                </Section>
                <Section title="Let's Connect">
                    <Contact />
                </Section>
            </main>
        </>
    );
};

export default HomePage;