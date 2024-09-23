function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
    const sortedArray = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }
    return [...sortedArray, ...left, ...right];
}

const array = [4,5,-1,2,3,5,8,1,4,-5,-6,-59];
console.log(mergeSort(array));