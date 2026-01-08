import BasicButton from "./Basics/BasicButton";
import List from "./List";

interface ProjectProps {
  project: {
    title: string,
    attributes: string[],
    image: string,
    url: string
  }
}

const Project = ({ project }: ProjectProps) => {
  return (
    <a href={project.url} target="_blank" className={`mb-4 rounded bg-white cursor-pointer`}>
      <img src={project.image} alt="" />
      <div className="p-6">
        <h3 className="text-xl pb-1 mb-1 font-bold border-b  border-gray-300">{project.title}</h3>
        <List list={project.attributes} />
        <BasicButton primary className="mt-4">
          Case Study &gt;
        </BasicButton>
      </div>
    </a>
  );
};

export default Project;