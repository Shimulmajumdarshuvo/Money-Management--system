
function getInputValue(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputValue = parseInt(inputFiled.value);
    inputFiled.value = '';
    return inputValue;

}

document.getElementById('button-item').addEventListener('click', function () {
    const income = getInputValue('money-item');


    const foodItem = getInputValue('food-item');


    const rentitem = getInputValue('rent-item');


    const clothesItem = getInputValue('clothes-item');

    if (income < 0 || foodItem < 0 || rentitem < 0 || clothesItem < 0) {
        alert('Please enter the valid input!!!!');

    }
    else {

        const calculation = foodItem + rentitem + clothesItem;

        document.getElementById('total-Expenses').innerText = calculation;
        document.getElementById('total-balance').innerText = income - calculation;

    }




})






