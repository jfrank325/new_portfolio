interface ListProps {
  list: string[],
  position?: 'left' | 'center' | 'right'
}

const BulletList = ({list, position}: ListProps) => {
  return (
    <ul className={`w-fit list-disc space-y-2 ${position === 'center' ? 'mx-auto' : ''}`}>
        {list.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
        ))}
    </ul>
  );
};

export default BulletList;