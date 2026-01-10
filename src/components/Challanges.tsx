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
                    <h2 className="pb-6">Problem</h2>
                    <p>{problem.content}</p>
                    {problem.note && <p className="pt-4">{problem.note}</p>}
                </div>
                <div className="">
                    <h2 className="pb-6">Solution</h2>
                    <p className="pb-4">{solution.intro}</p>
                    <BulletList list={solution.points} />
                </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">{solution.note}</p>
        </section>
    );
};

export default Challanges;