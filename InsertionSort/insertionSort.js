function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let numberToInsert = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > numberToInsert) {
            array[j+1] = array[j];
            j = j-1;
        }
        array[j+1] = numberToInsert;
    }
};

const array = [-4,5,6,4,2,7,8,9,2,3,0];
insertionSort(array);
console.log(array);