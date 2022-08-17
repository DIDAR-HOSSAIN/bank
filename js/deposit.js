document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositfield = document.getElementById('deposit-field');
    const depositValString = depositfield.value;
    const newDeposit = parseFloat(depositValString);
    // console.log(newDeposit);
    depositfield.value = '';
    const totalField = document.getElementById('deposit-total');
    const totalValString = totalField.innerText;
    // const totalVal = totalValString.value;
    const totalValFloat = parseFloat(totalValString);
    const newAdd = totalValFloat + newDeposit;
    totalField.innerText = newAdd;

})