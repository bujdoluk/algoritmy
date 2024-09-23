function recursiveBinarySearch(target, array) {
    return search(target, array, 0, array.length - 1);
};

function search(target, array, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let mid = Math.floor((leftIndex + rightIndex) /2);
    if (target === array[mid]) {
        return mid;
    }

    if (target < array[mid]) {
        return search(target, array, leftIndex, mid - 1);
    } else {
        return search(target, array, mid + 1, rightIndex);
    }
}

console.log(recursiveBinarySearch(12, [1,2,3,4,6,7,8,9,10,11,12,15]));