import content from '../content.json';
import Project from './Project';

const projects = [...content.projects];

const gridColsClass = `grid-cols-${projects.length}`;

const Projects = () => {
    return (
        <div className={`grid justify-between space-x-2 sm:grid-cols-2`}>
            {projects.map((project) => (
                    <Project key={project.title} project={project} />
            ))}
        </div>
    );
};

export default Projects;