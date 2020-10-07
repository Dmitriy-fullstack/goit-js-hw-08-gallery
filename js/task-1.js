const itemEl = document.querySelectorAll('.item');
// console.log(itemEl)
console.log(`В списке ${itemEl.length} категории`)
itemEl.forEach(itemEl => {
    const titleEl = itemEl.firstElementChild.textContent
    console.log(`Категория ${titleEl}`)
    const categoryLiEl = itemEl.querySelectorAll('li')
    console.log(`Количество элементов: ${categoryLiEl.length}`)
});