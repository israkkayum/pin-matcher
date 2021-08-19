document.getElementById('deposit-button').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposit-input');
    const depositeInputText = depositeInput.value;
    const depositeValue = parseFloat(depositeInputText);

    if (depositeValue > 0) {
        const depositeTotal = document.getElementById('deposit-total');
        const depositePreviousText = depositeTotal.innerText;
        const depositePrevious = parseFloat(depositePreviousText);
        depositeTotal.innerText = depositeValue + depositePrevious;
        
        const blanceTotal = document.getElementById('balance-total');
        const blanceTotalText = blanceTotal.innerText;
        const blanceTotalValue = parseFloat(blanceTotalText);
        blanceTotal.innerText = blanceTotalValue + depositeValue;

        const depositeError = document.getElementById('deposite-error');
        depositeError.style.backgroundColor = '';

    }
    else{
      const depositeError = document.getElementById('deposite-error');
      depositeError.style.backgroundColor = 'red';
    }
    
    depositeInput.value = '';
});

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputValue = parseFloat(withdrawInputText);

    const blanceTotal = document.getElementById('balance-total');
    const blanceTotalText = blanceTotal.innerText;
    const blanceTotalValue = parseFloat(blanceTotalText);
    
    if (withdrawInputValue > 0 && withdrawInputValue < blanceTotalValue) {
        const withdrawTotal = document.getElementById('withdraw-total');
        const withdrawPreviousText = withdrawTotal.innerText;
        const withdrawPrevious = parseFloat(withdrawPreviousText);
        withdrawTotal.innerText = withdrawInputValue + withdrawPrevious;
    
        const blanceTotal = document.getElementById('balance-total');
        const blanceTotalText = blanceTotal.innerText;
        const blanceTotalValue = parseFloat(blanceTotalText);
        blanceTotal.innerText = blanceTotalValue - withdrawInputValue;

        const withdrawError = document.getElementById('withdraw-error');
        withdrawError.style.backgroundColor = '';
    
    }
    else{
        const withdrawError = document.getElementById('withdraw-error');
        withdrawError.style.backgroundColor = 'red';
      }
   
    withdrawInput.value = '';
})