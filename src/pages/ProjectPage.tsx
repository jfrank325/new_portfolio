import { useParams, useNavigate } from "react-router-dom";
import content from "../content.json";
import TechStack from "../components/TechStack";
import Section from "../components/Section";
import Challanges from "../components/Challanges";
import TechnicalApproach from "../components/TechnicalApproach";
import BulletList from "../components/BulletList";
import Impact from "../components/Impact";
import BasicButton from "../components/Basics/BasicButton";
import MetaTags from "../components/MetaTags";
import StructuredData from "../components/StructuredData";



const ProjectPage = () => {

  const title = useParams().title;
  const navigate = useNavigate();
  const project = content.projects.find(p => p.title === title);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto p-8 text-center">
        <h1 className="mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist.</p>
        <BasicButton onClick={() => navigate('/')}>
          Back to Home
        </BasicButton>
      </div>
    );
  }

  const projectUrl = typeof window !== 'undefined' ? `${window.location.origin}/project/${project.title}` : '';
  const projectImage = typeof window !== 'undefined' ? `${window.location.origin}${project.image}` : project.image;

  return (
    <>
      <MetaTags
        title={`${project.title} - Jason Franklin Portfolio`}
        description={project.overview || `${project.title}: ${project.subtitle}`}
        image={projectImage}
        url={projectUrl}
      />
      <StructuredData
        type="project"
        data={{
          name: project.title,
          description: project.overview || project.subtitle,
          image: projectImage,
          url: projectUrl,
        }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <header className="py-8 sm:py-12">
        <nav className="mb-6" aria-label="Project navigation">
          <BasicButton
            onClick={() => navigate('/')}
            aria-label="Go back to home page"
          >
            ← Back to Home
          </BasicButton>
        </nav>
        <h1 className="text-4xl sm:text-5xl">{project.title}</h1>
        <h2 className="pt-4 text-xl sm:text-2xl text-gray-600">{project.subtitle}</h2>
        {project.techStack && (
          <TechStack techStack={project.techStack} />
        )}
      </header>
      <div className="mb-8 sm:mb-12 rounded-lg overflow-hidden shadow-lg">
        <img 
          src={project.image} 
          alt={`${project.title} project screenshot`} 
          className="w-full h-auto object-cover" 
          loading="lazy"
        />
      </div>
      <main className="pb-8 sm:pb-12">
        <Section title="Overview">
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700">{project.overview}</p>
        </Section>
        {project.role && (
          <Section title="My Role">
            <div className="flex justify-center">
              <BulletList list={project.role} />
            </div>
          </Section>
        )}
        {project.problem && (
          <Challanges problem={project.problem} solution={project.solution} />
        )}
        {project.technicalApproach && (
          <TechnicalApproach technicalApproachContent={project.technicalApproach} />
        )}
        {project.tradeoffs && (
          <Section title="Tradeoffs">
            <BulletList list={project.tradeoffs} />
          </Section>
        )}
        {project.impact && (
          <Impact impactContent={project.impact} />
        )}
        {project.demonstrates && (
          <Section title="What This Demonstrates">
            <BulletList list={project.demonstrates} position="center" />
          </Section>
        )}
        {project.takeaways && (
          <Section title="Key Learnings & Takeaways">
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700">{project.takeaways}</p>
          </Section>
        )}
        {project.why && (
          <Section title="Why This Experience Matters">
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700">{project.why}</p>
          </Section>
        )}
      </main>
      </div>
    </>
  );
};

export default ProjectPage;