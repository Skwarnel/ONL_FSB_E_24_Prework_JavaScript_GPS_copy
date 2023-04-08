const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

function printArrayWithStringLength(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("City: " + array[i] + " has " + array[i].replaceAll(" ", "").length + " characters.")
    }
}

printArrayWithStringLength(cities);