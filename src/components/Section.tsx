import BasicTitle from "./Basics/BasicTitle";

interface SectionProps {
  title: string,
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => {

  return (
    <section className="my-12 max-w-4xl mx-auto">
      <BasicTitle title={title} />
      <div className="py-8">
        {children}
      </div>
    </section>
  );
};

export default Section;