import { meals, EnglishMeals, AmericanMeals, IndianMeals, ItalianMeals, AsianMeals } from "./mealData";
import { pushToMemory } from "./mealData";
import { loadDataFromLocalStorage } from "./mealData";
import { createForm } from "./mealForm";

export {displayMeals};
export {createMeal}

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
        mealWrap.appendChild(mealInst);
        if(meal.Instructions === ''){
            mealInst.innerHTML= 'Recipe: None';
        } else {
        mealInst.innerHTML = `Recipe: ${meal.Instructions}`;
       
        }
    
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
                // Identify the meal's type
                let mealType = meal.Type;
        
                // Find the index of the meal in the category array based on its type
                let categoryIndex = -1;
                switch (mealType) {
                    case 'English':
                        categoryIndex = EnglishMeals.findIndex(item => item === meal);
                        EnglishMeals.splice(categoryIndex, 1);
                        break;
                    case 'Asian':
                        categoryIndex = AsianMeals.findIndex(item => item === meal);
                        AsianMeals.splice(categoryIndex, 1);
                        break;
                    case 'Indian':
                        categoryIndex = IndianMeals.findIndex(item => item === meal);
                        IndianMeals.splice(categoryIndex, 1);
                        break;
                    case 'American':
                        categoryIndex = AmericanMeals.findIndex(item => item === meal);
                        AmericanMeals.splice(categoryIndex, 1);
                        break;
                    case 'Italian':
                        categoryIndex = ItalianMeals.findIndex(item => item === meal);
                        ItalianMeals.splice(categoryIndex, 1);
                        break;
                    default:
                        break;
                }

                
        
                // Update local storage with modified storedMeals
                pushToMemory(storedMeals);
        
                
                
                // Remove the meal element from the DOM
                mainC.removeChild(mealWrap);
            }
        });
        

            
        

        // let editButton = document.createElement('button');
        // editButton.innerHTML = 'Edit';
        // mealWrap.appendChild(editButton);

        // editButton.addEventListener('click', ()=>{
        //     createForm();
        // })

    mainC.appendChild(mealWrap);
}
