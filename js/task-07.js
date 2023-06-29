const fontSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

fontSizeControl.addEventListener('input', updateFontSize);

function updateFontSize(event) {
    const fontSize = event.target.value + 'px';
    textElement.style.fontSize = fontSize;
}
