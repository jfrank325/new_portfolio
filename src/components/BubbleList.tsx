import BasicBubble from "./Basics/BasicBubble";

interface BubbleListProps {
  list: string[],
  size: "small" | "large",
}

const BubbleList = ({list, size}: BubbleListProps) => {
  return (
    <div className={`flex flex-wrap justify-center md:justify-start ${size === "large" ? "w-full gap-4" : "gap-2"}`}>
      {list.map((item, index) => (
        <BasicBubble key={item} content={item} size={size}/>
      ))}
    </div>
  );
};

export default BubbleList;