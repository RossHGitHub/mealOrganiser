import { meals } from "./mealData";
import { pushToMemory } from "./mealData";
import { loadDataFromLocalStorage } from "./mealData";

export {displayMeals};

function displayMeals(mainC){

    loadDataFromLocalStorage();

    let mealString = localStorage.getItem('meal');
    let storedMeals = JSON.parse(mealString);

    if(storedMeals === null){
        alert('Please Add Some Meals!')
    } else 
    for (let i=0; i<storedMeals.length; i++){
      
        createMeal(storedMeals[i], mainC, storedMeals);
    }


    }


    function createMeal(meal, mainC, storedMeals) {
        let mealWrap = document.createElement('div');
        mealWrap.classList = 'mealWrap';
    
        let mealName = document.createElement('div');
        mealName.innerHTML = meal.Name;
        mealWrap.appendChild(mealName);
    
        let mealType = document.createElement('div');
        mealType.innerHTML = `Type: ${meal.Type}`;
        mealWrap.appendChild(mealType);
    
        let mealInst = document.createElement('div');
        mealInst.innerHTML = `Recipe: ${meal.Instructions}`;
        mealWrap.appendChild(mealInst);
    
        let mealIngr = document.createElement('ol');
        mealIngr.innerHTML = meal.Ingredients;
        mealWrap.appendChild(mealIngr);
    
        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove';
        mealWrap.appendChild(removeButton);
    
        removeButton.addEventListener('click', function () {
            let index = storedMeals.indexOf(meal);
            if (index !== -1) {
                storedMeals.splice(index, 1);
                meals.splice(index, 1); 
                pushToMemory(storedMeals);
                localStorage.setItem('meal', JSON.stringify(storedMeals));
                mainC.removeChild(mealWrap);
            }
        });

    mainC.appendChild(mealWrap);
}