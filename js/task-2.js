const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  
 
  const listIngredientsEl = ingredients.map(ingredient => {
    const ingLiEl = document.createElement('li');
    ingLiEl.textContent = ingredient;

    return ingLiEl;
  });

  const ingredientsEl = document.querySelector('#ingredients')
  console.log(ingredientsEl)
  ingredientsEl.append(...listIngredientsEl)
  
  
  
  

  