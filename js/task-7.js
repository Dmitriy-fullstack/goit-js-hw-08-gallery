const rangeEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

function onInputChangeRange (){
    spanTextEl.style.fontSize = rangeEl.value + 'px';
}

rangeEl.addEventListener('input', onInputChangeRange);