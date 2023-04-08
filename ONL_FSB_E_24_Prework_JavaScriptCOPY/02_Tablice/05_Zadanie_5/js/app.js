function getSecondMaxNumber(array) {
    let newArray = array.sort(function(a, b) {
        return b - a;
    });
    return newArray[1];
}

const numbers = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(numbers));