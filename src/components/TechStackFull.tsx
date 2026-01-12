import BubbleList from "./BubbleList";
import Section from "./Section"

interface TechStackFullProps {
    techStackFullContent: {
        "Frontend": string[];
        "Backend": string[];
        "Data & Infrastructure": string[];
    }
}

const TechStackFull = ({ techStackFullContent }: TechStackFullProps) => {
    return (
        <Section title="Tech Stack">
            {Object.entries(techStackFullContent).map(([category, items]) => (
                <div key={category} className="mb-6 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-2">{category}</h3>
                    <BubbleList list={items} size="small" />
                </div>
            ))}
        </Section>
    );
};

export default TechStackFull;