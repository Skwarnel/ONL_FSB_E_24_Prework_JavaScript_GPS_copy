let randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let input = prompt("Please, type any number between 1 and 10");
// for (let i = 0; i < 2000; i++) {
//     console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1))
// }

if (randomNum == input) {
    console.log("randomNum: " + randomNum)
    console.log("input: " + input)
    console.log("Bravo!")
} else {
    console.log("randomNum: " + randomNum)
    console.log("input: " + input)
    console.log("Try again");
}