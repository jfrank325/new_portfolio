import BubbleList from "./BubbleList";

interface techStackProps {
    techStack: string[],
}

const TechStack = ({ techStack }: techStackProps) => {
    return (
        <div className="my-10 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
            <BubbleList list={techStack} size="small" />
        </div>
    );
};

export default TechStack;