import BasicTitle from "./Basics/BasicTitle";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface SectionProps {
  title: string,
  children: React.ReactNode,
  id?: string
}

const Section = ({ title, children, id }: SectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      id={id} 
      className={`my-16 max-w-4xl mx-auto scroll-mt-20 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <BasicTitle title={title} />
      <div className="py-8">
        {children}
      </div>
    </section>
  );
};

export default Section;