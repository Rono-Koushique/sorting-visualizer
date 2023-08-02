function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

export function generateRandomArray({ length, max }) {
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randomNum = getRandomInt(max);
        randomArray.push(randomNum);
    }
    return randomArray;
}

export function swapInArray(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
