import content from '../content.json';
import ProjectCard from './ProjectCard';

const projects = [...content.projects];

const gridColsClass = `grid-cols-${projects.length}`;

const Projects = () => {
    return (
        <div className={`grid justify-between space-x-8 sm:grid-cols-2`}>
            {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    );
};

export default Projects;