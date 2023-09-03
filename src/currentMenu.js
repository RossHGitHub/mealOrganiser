export {currentMenu};

function currentMenu(main){
    main.innerHTML='';
    let mealArea = document.createElement('div');
    mealArea.classList='mealArea';
    let mealAreaHead = document.createElement('h2');
    mealAreaHead.innerHTML = 'Current Menu';
    let mealDisplay = document.createElement('div');
    mealDisplay.classList='mealDisplay';
   
    

    mealArea.appendChild(mealAreaHead);
    mealArea.appendChild(mealDisplay);
    main.appendChild(mealArea);

    let ingredientArea = document.createElement('div');
    ingredientArea.classList='ingredientsWrap'
    let ingrTitle = document.createElement('h2');
    ingrTitle.innerHTML = 'Ingredients For This Week';
    ingredientArea.appendChild(ingrTitle);

    let weeklyIngredients = document.createElement('ol');
    weeklyIngredients.setAttribute('id', 'weeklyIngredients')
    ingredientArea.appendChild(weeklyIngredients);
    main.appendChild(ingredientArea);

   getCurrentMenu(mealDisplay);
}

function getCurrentMenu(mealDisplay){
    let currentMenuMeals = JSON.parse(localStorage.getItem('currentMenu'))
    let weeklyIngredients = document.getElementById('weeklyIngredients');

    currentMenuMeals.forEach(element => {

        if (element === null) {
            return

        } else {
        let mealWrap = document.createElement('div');
        mealWrap.classList = 'mealWrap';
    
        let mealName = document.createElement('div');
        mealName.innerHTML = element.Name;
        mealName.setAttribute('class', 'mealName')
        mealWrap.appendChild(mealName);
    
        let mealType = document.createElement('div');
        mealType.innerHTML = `Type: ${element.Type}`;
        mealWrap.appendChild(mealType);

    
        let mealInst = document.createElement('div');
        mealWrap.appendChild(mealInst);
        if(element.Instructions === ''){
            mealInst.innerHTML= 'Recipe: None';
        } else {
        mealInst.innerHTML = `Recipe: ${element.Instructions}`;
       
        }
    
        let mealIngr = document.createElement('ol');
        element.Ingredients.forEach(item => {
            let ingr = document.createElement('li');
            ingr.innerHTML=item;
            mealIngr.appendChild(ingr);

            
        })

        element.Ingredients.forEach(ingredient => {
            const weeklyIngr = document.createElement('li');
            weeklyIngr.innerHTML = ingredient;
            weeklyIngredients.appendChild(weeklyIngr);
        mealWrap.appendChild(mealIngr)});

        mealDisplay.appendChild(mealWrap);}

    })

   
};