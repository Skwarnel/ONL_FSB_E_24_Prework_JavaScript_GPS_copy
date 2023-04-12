document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const table = document.querySelector('tbody');
    const dataRow = table.lastElementChild;
    console.log(dataRow);
    const dataClone = dataRow.cloneNode(true);
    const formElements = event.currentTarget.elements;

    if (formElements[0].value === formElements[2].value) {
        console.log('Team must be different');
    } else if (formElements[1].value < 0 || formElements[3].value < 0) {
        console.log('Scores can\'t be negative');
    } else {
        console.log('Everything is OK');
        dataClone.children[0].innerText = formElements[0].value;
        dataClone.children[1].innerText = formElements[2].value;
        const msg = formElements[1].value  + " - " + formElements[3].value;
        dataClone.children[2].innerText = msg;
        table.appendChild(dataClone);
    }
});