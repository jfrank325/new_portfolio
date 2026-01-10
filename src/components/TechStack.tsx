import BubbleList from "./BubbleList";

interface techStackProps {
    techStack: string[],
}

const TechStack = ({ techStack }: techStackProps) => {
    return (
        <div className="my-10">
            <h3>Tech Stack</h3>
            <BubbleList list={techStack} size="small" />
        </div>
    );
};

export default TechStack;