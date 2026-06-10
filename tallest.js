const heights = [654, 76, 97, 34, 6,5555];

function findSorter(array) {
    let max = array[0];
    for (const number of array) {

        if (number > max) {
            max = number;
        }
    }
    return max;
}

const max = findSorter(heights);
console.log(max);



function findTallest(array) {
    let min = array[0];
    for (const number of array) {

        if (number < min) {
            min = number;
        }
    }
    return min
}

const min = findTallest(heights);
console.log(min);
