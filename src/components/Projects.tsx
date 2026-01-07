import content from '../content.json';
import Project from './Project';

const projects = [content.mtbGroupRide, content.yt];

const Projects = () => {
    return (
        <div className="flex justify-between space-x-2">
            {projects.map((project, index) => (
                    <Project title={project.title} attributes={project.attributes} projectsLength={projects.length} />
            ))}
        </div>
    );
};

export default Projects;