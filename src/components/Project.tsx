import BasicButton from "./Basics/BasicButton";
import List from "./List";

interface ProjectProps {
  title: string,
  attributes: string[],
  projectsLength?: number
}

const Project = ({title, attributes, projectsLength}: ProjectProps) => {
  return (
    <div className={`mb-4 rounded bg-white w-${projectsLength ? `1/${projectsLength}` : 'full'}`}>
      <img src="" alt="" />
      <div className="p-6">
      <h3 className="text-xl pb-1 mb-1 font-bold border-b  border-gray-300">{title}</h3>
      <List list={attributes} />
      <BasicButton primary className="mt-4">
        Case Study &gt;
      </BasicButton>
      </div>
    </div>
  );
};

export default Project;