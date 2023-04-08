const years = [1995, 1856, 2014, 1987];

function ageCalculate(array) {
    const date = new Date();
    let currentYear = date.getFullYear();
    console.log("Current year is: " + currentYear);
    for (let i = 0; i < array.length; i++) {
        let bornYear = array[i];
        let age = currentYear - bornYear;
        console.log("Born in: " + array[i] + ", age: " + age);
    }
}

ageCalculate(years);