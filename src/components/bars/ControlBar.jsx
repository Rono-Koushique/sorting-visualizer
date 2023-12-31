import "./ControlBar.css";
import { Icon } from "@iconify/react";
import ColorBtn from "../buttons/ColorBtn";
import sortingAlgorithms from "../../utils/SortingHandlers";
import { hyphenCaseToCapitalized } from "../../utils/Helpers";

const algorithms = Object.keys(sortingAlgorithms).map((identifier) => ({
    name: hyphenCaseToCapitalized(identifier),
    id: identifier,
}));

function ControlBar({ config, running, setConfig, randomizeArray, startSorting }) {
    const handleChange = (event) => {
        setConfig((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value,
        }));
    };

    return (
        <section className="w-full bg-neutral-900 p-2 border-b border-neutral-700 order-2 md:order-first">
            <div className="max-w-screen-lg mx-auto flex items-center flex-wrap justify-between gap-x-8 gap-y-4">
                <div className="flex flex-col w-full md:w-fit md:flex-row items-center gap-x-8 gap-y-4 md:flex-wrap">
                    <div className="controller">
                        <label htmlFor="length">Size:</label>
                        <input
                            type="number"
                            id="length"
                            value={config.length}
                            onChange={handleChange}
                        />
                        <ButtonModifier id="length" setConfig={setConfig} />
                    </div>
                    <div className="controller">
                        <label htmlFor="max">Max:</label>
                        <input
                            type="number"
                            id="max"
                            value={config.max}
                            onChange={handleChange}
                        />
                        <ButtonModifier id="max" setConfig={setConfig} />
                    </div>
                    <div className="controller">
                        <label htmlFor="algorithm">Algorithm:</label>
                        <select
                            id="algorithm"
                            value={config.algorithm}
                            onChange={handleChange}
                        >
                            {algorithms.map((algorithm, idx) => {
                                return (
                                    <option value={algorithm.id} key={`algorithm-${idx}`}>
                                        {algorithm.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <ColorBtn
                        className="bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-neutral-900"
                        onClick={randomizeArray}
                        disabled={running}
                    >
                        <Icon className="text-3xl" icon="mdi:repeat" />
                        <span className="font-medium">Random</span>
                    </ColorBtn>
                    <ColorBtn
                        className="bg-green-500 hover:bg-green-400 active:bg-green-600 text-neutral-900"
                        onClick={startSorting}
                        disabled={running}
                    >
                        <Icon className="text-3xl" icon="mdi:play" />
                        <span className=" font-medium">Start</span>
                    </ColorBtn>
                </div>
            </div>
        </section>
    );
}

export default ControlBar;

function ButtonModifier({ id, setConfig }) {
    const increaseCount = () => {
        setConfig((prevState) => {
            const prevValue = prevState[id];
            return {
                ...prevState,
                [id]: prevValue + 1,
            };
        });
    };
    const decreaseCount = () => {
        setConfig((prevState) => {
            const prevValue = prevState[id];
            return {
                ...prevState,
                [id]: prevValue - 1,
            };
        });
    };
    return (
        <div className="btnModifier">
            <button className="increaseBtn" onClick={increaseCount}>
                <Icon icon="ic:baseline-plus" />
            </button>
            <button className="decreaseBtn" onClick={decreaseCount}>
                <Icon icon="ic:baseline-minus" />
            </button>
        </div>
    );
}
