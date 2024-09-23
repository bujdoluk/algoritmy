function countInversions(array) {
    let inversionCount = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                inversionCount++;
            }
        }
    }
    return inversionCount;
};

const array = [4,3,2,1];
console.log(countInversions(array));