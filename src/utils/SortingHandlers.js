import { swapInArray } from "./ArrayModifiers.js";

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

export async function quickSort({ array, animatePoles }) {
    const arr = [...array];
    if (arr.length <= 1) {
        return arr;
    }

    const stack = [{ left: 0, right: arr.length - 1 }];

    while (stack.length > 0) {
        const { left, right } = stack.pop();

        if (left < right) {
            const pivotIndex = await partition(arr, left, right, animatePoles);

            if (pivotIndex - 1 > left) {
                stack.push({ left, right: pivotIndex - 1 });
            }
            if (pivotIndex + 1 < right) {
                stack.push({ left: pivotIndex + 1, right });
            }
        }
    }
}

async function partition(arr, left, right, animatePoles) {
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            swapInArray(arr, i, j);
        }
        await animatePoles([...arr], [i, j]);
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

async function heapSort({ array, animatePoles }) {
    const arr = [...array];
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        swapInArray(arr, 0, i);
        await heapify(arr, 0, i, animatePoles);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        let largest = i;
        for (;;) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < n && arr[left] > arr[largest]) {
                largest = left;
            }

            if (right < n && arr[right] > arr[largest]) {
                largest = right;
            }

            if (largest !== i) {
                swapInArray(arr, i, largest);
                i = largest;
            } else {
                break;
            }
        }
    }
}

async function heapify(arr, i, heapSize, animatePoles) {
    let largest = i;

    for (;;) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < heapSize && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }

        await animatePoles([...arr], [i, largest]);

        if (largest !== i) {
            swapInArray(arr, i, largest);
            i = largest;
        } else {
            break;
        }
    }
}

const sortingAlgorithms = {
    "bubble-sort": bubbleSort,
    "insertion-sort": insertionSort,
    "selection-sort": selectionSort,
    "quick-sort": quickSort,
    "heap-sort": heapSort,
};

export default sortingAlgorithms;
