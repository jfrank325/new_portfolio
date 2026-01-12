import Header from '../components/Header'
import Projects from '../components/Projects'
import Section from '../components/Section'
import List from '../components/BulletList'
import content from '../content.json'
import Contact from '../components/Contact'
import About from '../components/About'
import TechStackFull from '../components/TechStackFull'
import StructuredData from '../components/StructuredData'
import ScrollToTop from '../components/ScrollToTop'

const HomePage = () => {
    return (
        <>
            <StructuredData
                type="person"
                data={{
                    description: content.about,
                    knowsAbout: Object.values(content.techStack).flat(),
                }}
            />
            <StructuredData
                type="website"
                data={{
                    description: content.subtitle,
                }}
            />
            <a 
                href="#featured-work" 
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
                aria-label="Skip to main content"
            >
                Skip to main content
            </a>
            <Header />
            <main id="main-content" className="container mx-auto px-4 sm:px-6 lg:px-32 font-sans">
                <Section id="featured-work" title="Featured Work">
                    <Projects />
                </Section>
                <Section id="experience" title="Experience Snapshot">
                    <List list={content.experienceSnapshot} position='center' />
                </Section>
                <TechStackFull techStackFullContent={content.techStack} />
                <Section id="about" title="About Me">
                    <About />
                </Section>
                <Section id="contact" title="Let's Connect">
                    <Contact />
                </Section>
            </main>
            <ScrollToTop />
        </>
    );
};

export default HomePage;