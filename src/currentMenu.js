export {currentMenu};

function currentMenu(main){
    main.innerHTML='';
    let mealArea = document.createElement('div');
    let mealAreaHead = document.createElement('h2');
    mealAreaHead.innerHTML = 'Current Menu'

    mealArea.appendChild(mealAreaHead);
    main.appendChild(mealArea);

    let ingredientArea = document.createElement('ol');
    main.appendChild(ingredientArea);

   getCurrentMenu(mealArea);
}

function getCurrentMenu(mealArea){
    let currentMenuMeals = JSON.parse(localStorage.getItem('currentMenu'))

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
        mealIngr.innerHTML = element.Ingredients;
        mealWrap.appendChild(mealIngr);

        mealArea.appendChild(mealWrap);}

    });
}