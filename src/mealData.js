import { createMeal } from "./myMeals";
import { currentMenu } from "./currentMenu";
export {EnglishMeals, AsianMeals, IndianMeals, AmericanMeals, ItalianMeals}
export {mealData, pushToMemory, loadDataFromLocalStorage, randomize, meals};


let meals = [];

let EnglishMeals = [];
let AsianMeals = [];
let IndianMeals = [];
let AmericanMeals = [];
let ItalianMeals = [];

loadDataFromLocalStorage();

function loadDataFromLocalStorage() {
    const mealString = localStorage.getItem('meal');
    if (mealString) {
        meals = JSON.parse(mealString);

        EnglishMeals = JSON.parse(localStorage.getItem('EnglishMeals')) || [];
        AsianMeals = JSON.parse(localStorage.getItem('AsianMeals')) || [];
        IndianMeals = JSON.parse(localStorage.getItem('IndianMeals')) || [];
        AmericanMeals = JSON.parse(localStorage.getItem('AmericanMeals')) || [];
        ItalianMeals = JSON.parse(localStorage.getItem('ItalianMeals')) || [];
    }
}

function mealData(meal, type) {
    meals.push(meal);

    switch (type) {
      case "English":
        EnglishMeals.push(meal);
  
        break;
      case "Asian":
        AsianMeals.push(meal);
        break;
      case "Indian":
        IndianMeals.push(meal);
        break;
      case "American":
        AmericanMeals.push(meal);
        break;
      case "Italian":
        ItalianMeals.push(meal);
        break;
      default:
        console.log('err');
        break;
    }

    pushToMemory(meals);
  }
  

  function pushToMemory(meals){
    if (typeof localStorage !== 'undefined') {
       localStorage.clear();
    
         
            localStorage.setItem('EnglishMeals', JSON.stringify(EnglishMeals));
            localStorage.setItem('AsianMeals', JSON.stringify(AsianMeals));
            localStorage.setItem('IndianMeals', JSON.stringify(IndianMeals));
            localStorage.setItem('AmericanMeals', JSON.stringify(AmericanMeals));
            localStorage.setItem('ItalianMeals', JSON.stringify(ItalianMeals));

            localStorage.setItem('meal', JSON.stringify(meals));
        
    
      } else {
       console.log('No Memory Available')
      }
  }



function randomFunc(arr){
  let randMeal = Math.floor(Math.random()*arr.length);
  return arr[randMeal]
}


function randomize(){
  localStorage.removeItem('currentMenu')
    let randMeals = []
    
    const shuffledMeals = [...meals]; // Create a copy of the meals array
    for (let i = shuffledMeals.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledMeals[i], shuffledMeals[j]] = [shuffledMeals[j], shuffledMeals[i]];
    }
  
    // Get the first 5 shuffled meals
    randMeals = shuffledMeals.slice(0, 5);
localStorage.setItem('currentMenu', JSON.stringify(randMeals));
console.log(randMeals)


}

  
  
  
  