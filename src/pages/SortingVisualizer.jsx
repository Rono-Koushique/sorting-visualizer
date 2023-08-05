import { useEffect, useState } from "react";
import ControlBar from "../components/bars/ControlBar";
import { generateRandomArray } from "../utils/ArrayModifiers";
import Poles from "../components/sections/Poles";
import sortingAlgorithms from "../utils/SortingHandlers";

const defaultConfig = {
    length: 50,
    max: 100,
    speed: 1,
    algorithm: Object.keys(sortingAlgorithms)[0],
};

function SortingVisualizer() {
    const [config, setConfig] = useState(defaultConfig);
    const [running, setRunning] = useState(false);
    const [array, setArray] = useState(generateRandomArray(config));
    const [animateIdx, setAnimateIdx] = useState([]);

    useEffect(() => {
        setArray(generateRandomArray(config));
    }, [config]);

    const randomizeArray = () => {
        setArray(generateRandomArray(config));
    };

    const animatePoles = async (currentState, currentAnimateIdx) => {
        setAnimateIdx(currentAnimateIdx);
        setArray(currentState);
        await new Promise((resolve) => setTimeout(resolve, 1 / config.speed));
    };

    const startSorting = async () => {
        const sorter = sortingAlgorithms[config.algorithm];
        setRunning(true);
        await sorter({ array, animatePoles });
        setAnimateIdx([]);
        setRunning(false);
    };

    return (
        <main className="h-screen flex flex-col">
            <ControlBar
                config={config}
                running={running}
                setConfig={setConfig}
                randomizeArray={randomizeArray}
                startSorting={startSorting}
            />
            <Poles array={array} config={config} animateIdx={animateIdx} />
        </main>
    );
}

export default SortingVisualizer;
