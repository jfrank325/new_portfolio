import { useParams } from "react-router-dom";
import content from "../content.json";
import TechStack from "../components/TechStack";
import Section from "../components/Section";
import Challanges from "../components/Challanges";
import TechnicalApproach from "../components/TechnicalApproach";
import BulletList from "../components/BulletList";
import Impact from "../components/Impact";



const ProjectPage = () => {

  const title = useParams().title;
  const project = content.projects.find(p => p.title === title);

  return (
    <>
      <header className="p-8">
        <h1>{project?.title}</h1>
        <h2 className="pt-4">{project?.subtitle}</h2>
        {project?.techStack && (
          <TechStack techStack={project.techStack} />
        )}
      </header>
      <img src={project?.image} alt={project?.title} />
      <main className="p-8">
        <Section title="Overview">
          <p className="max-w-2xl mx-auto">{project?.overview}</p>
        </Section>
        {project?.role && (
          <Section title="My Role">
            <div className="flex justify-center">
              <BulletList list={project.role} />
            </div>
          </Section>
        )}
        {project?.problem && (
          <Challanges problem={project.problem} solution={project.solution} />
        )}
        {project?.technicalApproach && (
          <TechnicalApproach technicalApproachContent={project.technicalApproach} />
        )}
        {project?.tradeoffs && (
          <Section title="Tradeoffs">
            <BulletList list={project.tradeoffs} />
          </Section>
        )}
        {project?.impact && (
          <Impact impactContent={project.impact} />
        )}
        {project?.demonstrates && (
          <Section title="What This Demonstrates">
            <BulletList list={project.demonstrates} position="center" />
          </Section>
        )}
        {project?.takeaways && (
          <Section title="Key Learnings & Takeaways">
            <p className="max-w-2xl mx-auto">{project.takeaways}</p>
          </Section>
        )}
        {project?.why && (
          <Section title="Why This Experience Matters">
            <p className="max-w-2xl mx-auto">{project.why}</p>
          </Section>
        )}
      </main>
    </>
  );
};

export default ProjectPage;