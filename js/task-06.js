const inputElement = document.querySelector('#validation-input');
inputElement.addEventListener('blur', checkInputLength);

function checkInputLength(event) {
    const expectedLength = parseInt(inputElement.getAttribute('data-length'));
    const inputValue = event.target.value.trim();
    const isInputValid = inputValue.length === expectedLength;

    if (isInputValid) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
    }
}
