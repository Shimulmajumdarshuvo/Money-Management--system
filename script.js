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


// document.getElementById('save-button').addEventListener('click', function () {

//     // const moneyInput = document.getElementById('money-item');
//     // const moneyAmount = moneyInput.value;

//     const saveInput = document.getElementById('save-item');
//     const saveAmount = saveInput.value;

//     let updateV = parseInt(saveAmount);

//     // let savingsAmount = (parseInt(moneyAmount) * parseInt(saveAmount)) / 100;

//     // let savings = document.getElementById('saving-amount');
//     // const savingsText = savings.innerText;
//     // savings.innerText = saveInput.value;
//     // console.log(savings.innerText);



//     const saving = document.getElementById('saving-amount');
//     const savesText = saving.innerText;
//     saving.innerText = updateV;
//     console.log(saving.innerText);
// })

document.getElementById('button-save').addEventListener('click', function () {
    const saveInput = document.getElementById('save-item');
    const saveAmount = saveInput.value;




    // const parsent = document.getElementById('savings-amount');
    // const parsentText = parsent.innerText;
    // parsent.innerText = parseInt(saveAmount);
    // console.log(parsent.innerText);



    const cal = document.getElementById('savings-amount');
    const calText = cal.innerText;
    cal.innerText = saveAmount;

})
