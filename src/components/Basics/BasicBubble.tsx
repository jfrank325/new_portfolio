interface BasicBubbleProps {
  content: string,
  size: "small" | "large"
}

const BasicBubble = ({content, size}: BasicBubbleProps) => {
  return (
    <div className={`inline-block bg-gray-200 text-gray-700 max-w-64 rounded transition-all duration-200 hover:bg-gray-300 hover:shadow-md ${size === "large" ? "px-8 py-4 text-base" : "text-sm px-4 py-2"}`}>
      {content}
    </div>
  );
};

export default BasicBubble;