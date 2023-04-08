const numbers = [4, -5, 0, 2, -67, 8, 10, -34 ];
console.log(getNegativeNumbers(numbers));

function getNegativeNumbers(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}