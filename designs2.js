//create variables for specific elements to use throughout JavaScript
const sizePicker = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

//this will allow the user to submit the input values and call the function
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    const heightChoice = height.value;
    const widthChoice = width.value;
    makeGrid(heightChoice, widthChoice);
});
//to add color to the grid and change the size
function makeGrid(heightChoice, widthChoice) {
table.innerHTML = "";
    for (let x = 0; x < heightChoice; x++) {
        let row = table.insertRow(x);
        for (let y = 0; y < widthChoice; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener('click', function() {
                var color = document.getElementById('colorPicker');
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
