import BulletList from "./BulletList"
import Section from "./Section"

interface TechnicalApproachProps {
    technicalApproachContent: {
        parts: { title: string, points: string[] }[];
        note: string
    }
}

const TechnicalApproach = ({ technicalApproachContent }: TechnicalApproachProps) => {
    return (
        <Section title="Technical Approach">
            <div className="md:grid md:grid-cols-3 md:gap-8">
            {technicalApproachContent.parts.map((part, index) => (
                <div key={part.title} className="mb-6">
                    <h3 className="text-xl font-bold mb-2">{part.title}</h3>
                    <BulletList list={part.points} />
                </div>
            ))}
            </div>
            {technicalApproachContent.note && (
                <p className="text-sm text-gray-600 mt-4">{technicalApproachContent.note}</p>
            )}
        </Section>
    );
};

export default TechnicalApproach;