import { swapInArray } from "./ArrayModifiers";

export async function bubbleSort({ array, animatePoles }) {
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swapInArray(arr, j, j + 1);
                swapped = true;
                await animatePoles([...arr], [j, j + 1]);
            }
        }

        if (!swapped) break;
    }
}

export async function insertionSort({ array, animatePoles }) {
    const arr = [...array];
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];

        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            await animatePoles([...arr], [i, j]);
            j--;
        }

        arr[j + 1] = current;
    }
}

export async function selectionSort({ array, animatePoles }) {
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
            await animatePoles([...arr], [i, j]);
        }

        if (minIndex !== i) {
            swapInArray(arr, i, minIndex);
            await animatePoles([...arr], [i, minIndex]);
        }
    }
}
