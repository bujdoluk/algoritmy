function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
};

const array = [1,5,7,8,4,8,9,6,1,0,4,1,4,5,7,8,5,6,9,5,2,4,6,0];
bubbleSort(array);
console.log(array);