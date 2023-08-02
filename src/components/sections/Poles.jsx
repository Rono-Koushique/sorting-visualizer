import SinglePole from "./SinglePole";

function Poles({ array, config, animateIdx }) {
    const { max } = config;

    return (
        <section className="flex-1 flex">
            <div className="w-full max-w-screen-lg mx-auto flex items-start gap-0.5">
                {array.map((number, idx) => {
                    return (
                        <SinglePole
                            number={number}
                            max={max}
                            key={idx}
                            differ={animateIdx.includes(idx)}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Poles;
