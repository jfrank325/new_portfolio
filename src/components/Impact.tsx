import BubbleList from "./BubbleList";
import Section from "./Section"

interface ImpactProps {
  impactContent: {
    points: string[],
    note: string
  },
}

const Impact = ({impactContent}: ImpactProps) => {
  return (
    <Section title="Impact">
      <BubbleList list={impactContent.points} size="large" />
      {impactContent.note && (
        <p className="text-sm text-gray-600 mt-4">{impactContent.note}</p>
      )}
    </Section>
  );
};

export default Impact;