import { mealData } from "./mealData";
export {createForm, submitMeal};


function createForm(){
let main = document.querySelector('body');
let createMealButton = document.getElementById('createMealButton')

//create Wrapper
let backdrop = document.createElement('div');
backdrop.classList='formBack';


//create Meal Name
let mealName = document.createElement('input');
mealName.setAttribute('type', 'text');
mealName.setAttribute('placeholder', 'Meal Name');
mealName.classList='formMealName';

backdrop.appendChild(mealName);


//create Meal Type Option

let mealType = document.createElement('select');
mealType.setAttribute('id', 'mealType');

let mealTypeArr = ['Select..', 'Indian', 'Asian', 'English', 'American', 'Italian'];
for (let i=0; i<mealTypeArr.length; i++){
    let mealTypeOption = document.createElement('option');
    mealTypeOption.value = mealTypeArr[i];
    mealTypeOption.text = mealTypeArr[i];
    mealType.appendChild(mealTypeOption);
};

backdrop.appendChild(mealType);



//create Add Ingredient Button.

let ingButton = document.createElement('button');
ingButton.setAttribute('type', 'button');
ingButton.innerHTML='+ Add Ingredient';
backdrop.appendChild(ingButton)
ingButton.addEventListener('click', ()=>{
    addIngredient(ingredientsArr, ingredientsList);
})

//add Ingredients list

let ingredientsArr = [];
let ingredientsList = document.createElement('ul');
backdrop.appendChild(ingredientsList);



//SUBMIT BUTTON

let submitMealButton = document.createElement('button');
submitMealButton.setAttribute('type', 'button');
submitMealButton.innerHTML = 'Submit Meal';
backdrop.appendChild(submitMealButton);



submitMealButton.addEventListener('click', ()=>{
    main.removeChild(backdrop);
    submitMeal(mealName.value,ingredientsArr, mealType.value)
    main.appendChild(createMealButton);
});
main.removeChild(createMealButton);
main.appendChild(backdrop);






}



//INGREDIENT CREATION
function addIngredient(ingArr, ingList){
let ingWrap = document.createElement('div');

let ingName = document.createElement('input');
ingName.setAttribute('input', 'text');
ingName.setAttribute('placeholder', 'Ingredient');

ingWrap.appendChild(ingName);

let ingSubmit = document.createElement('button');
ingSubmit.setAttribute('type', 'button');
ingSubmit.innerHTML='Add';
ingWrap.appendChild(ingSubmit);

ingSubmit.addEventListener('click', ()=>{


        if(ingName.value === ''){
            ingName.classList='ingNameInvalid'
            ingName.setAttribute('placeholder', 'IDIOT')
        } else {
        ingArr.push(ingName.value);
        console.log(ingArr);
        
        let ing = document.createElement('li');
        ing.innerHTML=ingName.value;
        ingList.appendChild(ing);
        ingName.value='';
        ingWrap.innerHTML='';
        }
        
    

})

ingList.appendChild(ingWrap);


}

function submitMeal(mealName, mealIngredients, mealType){

    let meal = {}

    meal.Name = mealName;
    meal.Ingredients = mealIngredients;
    meal.Type = mealType

    mealData(meal);

}