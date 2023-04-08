const array = [63, 43234, 23423, 56, 56, 8, 4, 2, 1,  0, -987];
let sum = 0;
let avg = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
if (array.length != 0) {
    avg = sum / array.length;
}
console.log(avg);