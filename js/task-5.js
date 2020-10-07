const inputEl = document.querySelector('#name-input');
let spanEl = document.querySelector('#name-output');

function onInputChange(event) {
    spanEl.textContent = event.target.value;
    if(event.target.value === ''){
        spanEl.textContent = 'незнакомец'
    };
}

inputEl.addEventListener('input', onInputChange);