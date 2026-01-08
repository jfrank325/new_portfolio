import { useParams } from "react-router-dom";
import content from "../content.json";



const ProjectPage = () => {
  
  const title = useParams().title;
  const project = content.projects.find(p => p.title === title);
  const techStack = ["React", "Next.js", "PostgresSQL", "Supabase", "MapLibre", "Vercel", "Tailwind CSS"];

  return (
    <>
      <h1>{project?.title}</h1>
      <h2>{project?.subtitle}</h2>

    </>
  );
};

export default ProjectPage;