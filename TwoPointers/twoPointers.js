const array = [-4,-2,3,4,5,6,7,8,9];

let left = 0;
let right = array.length - 1;

while (left < right) {
    const sum = array[left] + array[right];
    if (sum === 0) {
        console.log(array[left]);
        console.log(array[right]);
        break;
    } else if (sum < 0) {
        left++;
    } else {
        right--;
    }
}