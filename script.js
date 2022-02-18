
// function incomeRent(income) {
//     const moneyInput = document.getElementById('money-item');
//     const moneyAmount = moneyInput.value;

// }

document.getElementById('button-item').addEventListener('click', function () {

    const foodInput = document.getElementById('food-item');
    const foodAmount = foodInput.value;

    const rentInput = document.getElementById('rent-item');
    const rentAmount = rentInput.value;

    const clothesInput = document.getElementById('clothes-item');
    const clothesAmount = clothesInput.value;


    const moneyInput = document.getElementById('money-item');
    const moneyAmount = moneyInput.value;





    let totalCost = parseInt(foodAmount) + parseInt(rentAmount) + parseInt(clothesAmount);


    //total cost 
    const total = document.getElementById('total-amount');
    const totalText = total.innerText;
    total.innerText = totalCost;
    //console.log(totalText);





    //total balance calculation


    let TotalBalance = parseInt(moneyAmount) - totalCost;

    const calculation = document.getElementById('total-balance');
    const calculationText = calculation.innerText;
    calculation.innerText = TotalBalance;
    console.log(calculationText);


})


document.getElementById('save-button').addEventListener('click', function () {


    const moneyInput = document.getElementById('money-item');
    const moneyAmount = moneyInput.value;

    const saveInput = document.getElementById('saves-item');
    const saveAmount = saveInput.value;


    let resultMoney = (parseInt(moneyAmount) * parseInt(saveAmount)) / 100;

    //updated savings balance
    const saving = document.getElementById('savings-amount');
    const savingText = saving.innerText;
    saving.innerText = resultMoney;
    console.log(saving.innerText);


    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseInt(balanceTotalText);


    //updated remaining balance
    const remaining = document.getElementById('remaining-amount');
    const remainingText = remaining.innerText;
    remaining.innerText = previousBalanceTotal - saving.innerText;


})
