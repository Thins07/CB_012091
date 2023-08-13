//paymentPage-form
function validatePaymentForm() {
    // Clear previous error messages
    clearErrors();

    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvc = document.getElementById('cvc').value;
    var cardName = document.getElementById('cardName').value;


    var check = true;

    if (cardNumber.trim() === '' ) {
        showError('cardNumber', 'Incomplete field');
        check = false;
    }else if( cardNumber.length !==16 ){
        showError('cardNumber', 'Card number should consist of 16 digits');
        check = false;
    }

    if (expiryDate.trim() === '') {
        showError('expiryDate', 'Invalid: example 01/11');
        check = false;
    }else if( expiryDate.length !== 5 ){
        showError('expiryDate', 'Card too old');
        check = false;
    }
    if (cvc.trim() === '' ) {
        showError('cvc', 'Incomplete field');
        check = false;
    }else if( cvc.length !== 3){
        showError('cvc', 'cvc should contain 3 digits');
        check = false;
    }

    if (cardName.trim() === '' ) {
        showError('cardName', 'Incomplete field');
        check = false;
    } else if (cardName.trim() == Number ){
        showError('cardName', 'Name containes invalid characters');
        check = false;
    }

    // Display a single error message if only one input field is filled
    if (!check) {
        showError('allFields', 'Please fill in all required fields');
    } else {
        window.location.href = 'confirmation.html'; // Navigate to confirmation page
    }

    localStorage.setItem("cardNumber" , cardNumber);
    localStorage.setItem("expiryDate", expiryDate);
    localStorage.setItem("cvc", cvc);
    localStorage.setItem("cardName", cardName);
}

    function showError(inputId, errorMessage) {
    var errorElement = document.querySelector('#' + inputId + ' + .error');
    errorElement.textContent = errorMessage;
}

    function clearErrors() {
    var errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
        element.textContent = '';
    });
}

document.addEventListener("DOMContentLoaded" , ()=>{
    const recapTable = document.getElementById("recapTable");
    recapTable.innerHTML = localStorage.getItem("table");
})
