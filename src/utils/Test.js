import { swapInArray } from "./ArrayModifiers.js";

function heapSort(array) {
    const arr = [...array];
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        swapInArray(arr, 0, i);
        heapify(arr, 0, i);
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

function heapify(arr, i, heapSize) {
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

        // await animatePoles([...arr], [i, largest]);

        if (largest !== i) {
            swapInArray(arr, i, largest);
            i = largest;
        } else {
            break;
        }
    }
}

console.log(heapSort([4, 2, 3, 6, 4]));
