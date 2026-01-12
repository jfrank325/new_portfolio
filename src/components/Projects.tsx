import content from '../content.json';
import ProjectCard from './ProjectCard';

const projects = [...content.projects];

const Projects = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    );
};

export default Projects;