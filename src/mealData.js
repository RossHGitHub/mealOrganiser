export {mealData}


let meals = [];

let EnglishMeals = [];
let AsianMeals = [];
let IndianMeals = [];
let AmericanMeals = [];
let ItalianMeals = [];


function mealData(meal){
meals.push(meal);
processType()
}

function processType(){
    for (let i=0; i<meals.length; i++){
        if (meals[i].Type === 'English'){
            EnglishMeals.push(meals[i]);
            console.log(EnglishMeals);
        } else {
            console.log('boo')
        }
    }
}