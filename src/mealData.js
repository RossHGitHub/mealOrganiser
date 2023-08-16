export {mealData, pushToMemory}


let meals = [];

let EnglishMeals = [];
let AsianMeals = [];
let IndianMeals = [];
let AmericanMeals = [];
let ItalianMeals = [];


function mealData(meal) {
    meals.push(meal);
    pushToMemory(meals);
  
    switch (meal.type) {
      case 'English':
        EnglishMeals.push(meal);
        break;
      case 'Asian':
        AsianMeals.push(meal);
        break;
      case 'Indian':
        IndianMeals.push(meal);
        break;
      case 'American':
        AmericanMeals.push(meal);
        break;
      case 'Italian':
        ItalianMeals.push(meal);
        break;
      default:
        // Handle the case where meal.type doesn't match any known types
        break;
    }
  }
  
  function pushToMemory(meals){
    if (typeof localStorage !== 'undefined') {
       localStorage.clear();
        localStorage.setItem('meal', JSON.stringify(meals));

      } else {
       console.log('No Memory Available')
      }
  }
  
  
  
  
  