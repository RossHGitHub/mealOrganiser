export {displayMeals};

function displayMeals(mainC){

    let mealString = localStorage.getItem('meal');
    let storedMeals = JSON.parse(mealString);

    if(storedMeals === null){
        alert('Please Add Some Meals!')
    } else 
    for (let i=0; i<storedMeals.length; i++){
      
        createMeal(storedMeals[i].Name, storedMeals[i].Type, storedMeals[i].Instructions, storedMeals[i].Ingredients, mainC)
    }


    }

function createMeal(name, type, instructions, ingredients, mainC){

    let mealWrap = document.createElement('div');
    mealWrap.classList='mealWrap';

    let mealName = document.createElement('div');
    mealName.innerHTML = name;
    mealWrap.appendChild(mealName);

    let mealType = document.createElement('div');
    mealType.innerHTML = `Type: ${type}`;
    mealWrap.appendChild(mealType);

    let mealInst = document.createElement('div');
    mealInst.innerHTML = `Recipe: ${instructions}`;
    mealWrap.appendChild(mealInst);

    let mealIngr = document.createElement('ol');
    mealIngr.innerHTML=ingredients;
    mealWrap.appendChild(mealIngr);

    mainC.appendChild(mealWrap);
}