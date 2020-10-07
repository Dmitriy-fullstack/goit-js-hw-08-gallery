const inputEl = document.querySelector('#validation-input');


function onInputChangeColor (){
    if(inputEl.value.length < inputEl.dataset.length){
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid'); 
    }
    
    else if(inputEl.value.length >= inputEl.dataset.length){
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
};

inputEl.addEventListener('change', onInputChangeColor);