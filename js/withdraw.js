document.getElementById('btn-withdraw').addEventListener('click',function (){
    const inputWithdraw = document.getElementById('withdraw-field');
    const inputValue = inputWithdraw.value;
    const stringToFloat = parseFloat(inputValue)
    inputWithdraw.value = '';
    // console.log(stringToFloat);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTextVal = withdrawTotal.innerText;
    const stringToFloatTotal = parseFloat(withdrawTextVal);
    const totalWithdraw = stringToFloat + stringToFloatTotal;
    withdrawTotal.innerText = totalWithdraw;

    const balanceWithdraw = document.getElementById('balance-total');
    const existBalance = balanceWithdraw.innerText;
    const stringToFloatBalance = parseFloat(existBalance);
    const fromBalanceTotalWithdraw = stringToFloatBalance - stringToFloat;
    balanceWithdraw.innerText = fromBalanceTotalWithdraw;

    
})

