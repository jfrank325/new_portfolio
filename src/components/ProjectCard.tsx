import BasicButton from "./Basics/BasicButton";
import BulletList from "./BulletList";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: {
    title: string,
    attributes: string[],
    image: string,
    url: string
  }
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={`mb-4 rounded bg-white`}>
      <img src={project.image} alt="" />
      <div className="p-6">
        <h3 className="text-xl pb-1 mb-1 font-bold border-b border-gray-300">{project.title}</h3>
        <BulletList list={project.attributes} />
        <BasicButton className="mt-4">
          <Link to={`/project/${project.title}`}>Case Study</Link>
        </BasicButton>
        <BasicButton primary><a href={project.url} target="_blank">Live Site</a></BasicButton>
      </div>
    </div>
  );
};

export default ProjectCard;