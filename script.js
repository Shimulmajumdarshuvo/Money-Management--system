
function getInputValue(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputValue = parseInt(inputFiled.value);

    return inputValue;

}

document.getElementById('button-item').addEventListener('click', function () {
    const income = getInputValue('money-item');


    const foodItem = getInputValue('food-item');


    const rentitem = getInputValue('rent-item');


    const clothesItem = getInputValue('clothes-item');

    //error handaling


    if (income < 0 || foodItem < 0 || rentitem < 0 || clothesItem < 0) {
        alert('Please enter the valid input!!!!');

    }


    else if (isNaN(income) != '' || isNaN(foodItem) != '' || isNaN(rentitem) != '' || isNaN((clothesItem) != '')) {
        alert('Enter a valid input number not string');

    }

    else {

        const calculation = foodItem + rentitem + clothesItem;
        if (calculation > income) {
            alert('Expences amount is bigger than income amount');
        }
        document.getElementById('total-Expenses').innerText = calculation;
        document.getElementById('total-balance').innerText = income - calculation;

    }









})

document.getElementById('save-button').addEventListener('click', function () {

    const income = getInputValue('money-item');

    const saveItem = getInputValue('saves-item');

    const parsentage = (income * saveItem) / 100;

    document.getElementById('savings-amount').innerText = parsentage;


    //updated save amount

    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseInt(balanceTotalText);


    //updated remaining balance


    if (parsentage > previousBalanceTotal) {
        alert('Savings amount is bigger than balance');
    } else {
        const remaining = document.getElementById('remaining-amount');
        const remainingText = remaining.innerText;
        remaining.innerText = previousBalanceTotal - parsentage;
    }

})








