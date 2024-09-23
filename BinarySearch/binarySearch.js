function binarySearch(target, array) {
    let high = array.length -1;
    let mid;
    let low = 0;

    while(low <= high) {
        mid = Math.floor((high + low) /2);

        if (target == array[mid]) {
            return mid;
        }

        if (target < array[mid]) {
            high = mid -1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

console.log(binarySearch(9, [1,2,3,4,5,6,7,8,9,10]));