import content from '../content.json';
import Project from './Project';

const projects = [content.mtbGroupRide, content.yt];

const Projects = () => {
    return (
        <div className={`flex justify-between space-x-2 grid-cols-${projects.length} md:grid`}>
            {projects.map((project, index) => (
                    <Project key={project.title} project={project} />
            ))}
        </div>
    );
};

export default Projects;