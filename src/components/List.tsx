interface ListProps {
  list: string[],
}

const List = ({list}: ListProps) => {
  return (
    <ul className="w-fit mx-auto list-disc list-inside space-y-2">
        {list.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
        ))}
    </ul>
  );
};

export default List;