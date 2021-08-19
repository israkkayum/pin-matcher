function pinGenerate(){
    const pinOutput = document.getElementById('pin-output');
    const pinMake = Math.round(Math.random()*1000000) + '';
    if (pinMake.length == 6) {
       pinOutput.value = pinMake        
    }
    else{
        return pinGenerate();
    }
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const keyInput = event.target.innerText;
    const keyOutput = document.getElementById('typed-numbers');
    if (isNaN(keyInput)) {
        if (keyInput == 'C') {
            keyOutput.value = '';
        }
    }
    else{
        const newOutput = keyOutput.value + keyInput;
        keyOutput.value = newOutput;
    }

});

const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('fail-message');
successMessage.style.display = 'none';
errorMessage.style.display = 'none';

function veryfyPin(){
    const generatePin = document.getElementById('pin-output').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('fail-message');
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    if (generatePin == typedPin) {
    //    successMessage.style.display = 'block';
    //    errorMessage.style.display = 'none';
    location.href = "bank.html";
    }
    else{
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}