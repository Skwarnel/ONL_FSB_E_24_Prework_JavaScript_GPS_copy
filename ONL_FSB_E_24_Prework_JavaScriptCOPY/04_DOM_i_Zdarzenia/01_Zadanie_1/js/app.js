const childElements = document.querySelector("article").children;

console.log(childElements);
function getTags(elements) {
    const array = [];
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].localName);
    }
    return array;
}

console.log("Result is: " + getTags(childElements));