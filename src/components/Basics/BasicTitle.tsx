interface titleProps {
  title: string,
}

const title = ({title}: titleProps) => {
  return (
    <div className="w-full relative items-center">
        <div className="absolute h-px top-1/2 bg-gray-300 w-full"></div>
        <h2 className="text-8 text-center relative left-1/2 -translate-x-1/2 bg-gray-100 w-fit px-6">{title}</h2>
    </div>
  );
};

export default title;