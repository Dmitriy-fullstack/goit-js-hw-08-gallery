const counterValue = document.querySelector('#value')
console.log (counterValue)

const counter = {
    value: 0,
    increment() {    
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.value;
});