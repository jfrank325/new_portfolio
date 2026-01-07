import BasicTitle from "./Basics/BasicTitle";

interface SectionProps {
  title: string,
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => {

  return (
    <section className="my-8">
      <BasicTitle title={title} />
      <div className="py-4">
        {children}
      </div>
    </section>
  );
};

export default Section;