import BulletList from "./BulletList";

interface ChallangesProps {
    problem: {
        content: string,
        note: string
    },
    solution: {
        intro: string,
        points: string[],
        note: string
    },
}

const Challanges = ({ problem, solution }: ChallangesProps) => {
    return (
        <section className="my-12 max-w-4xl mx-auto border-t pt-8 border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div className="">
                    <h2 className="pb-6 text-2xl font-semibold">Problem</h2>
                    <p className="leading-relaxed text-gray-700">{problem.content}</p>
                    {problem.note && <p className="pt-4 text-sm text-gray-600 italic">{problem.note}</p>}
                </div>
                <div className="">
                    <h2 className="pb-6 text-2xl font-semibold">Solution</h2>
                    <p className="pb-4 leading-relaxed text-gray-700">{solution.intro}</p>
                    <BulletList list={solution.points} />
                </div>
            </div>
            {solution.note && (
                <p className="text-sm text-gray-600 mt-6 italic">{solution.note}</p>
            )}
        </section>
    );
};

export default Challanges;