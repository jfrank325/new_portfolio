import { memo } from "react";
import BasicButton from "./Basics/BasicButton";
import BulletList from "./BulletList";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ProjectCardProps {
  project: {
    title: string,
    attributes: string[],
    image: string,
    url: string
  }
}

const ProjectCard = memo(({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  const handleCaseStudyClick = () => {
    navigate(`/project/${project.title}`);
  };

  const handleLiveSiteClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article 
      ref={ref}
      className={`mb-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="overflow-hidden">
        <img 
          src={project.image} 
          alt={`${project.title} project screenshot`} 
          className="w-full h-auto object-cover" 
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl pb-1 mb-1 font-bold border-b border-gray-300">{project.title}</h3>
        <BulletList list={project.attributes} />
        <div className="flex flex-wrap gap-2 mt-4">
          <BasicButton 
            onClick={handleCaseStudyClick}
            aria-label={`View case study for ${project.title}`}
          >
            Case Study
          </BasicButton>
          <BasicButton 
            primary
            onClick={handleLiveSiteClick}
            aria-label={`Visit ${project.title} live site (opens in new tab)`}
          >
            Live Site
          </BasicButton>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;