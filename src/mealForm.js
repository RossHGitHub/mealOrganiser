import { mealData} from "./mealData";
import { createLandingPage } from "./landingPage";
export {createForm, submitMeal};


function createForm(mainCon){

//create Wrapper
let backdrop = document.createElement('div');
backdrop.classList='formBack';

//create Form Title

let formTitle = document.createElement('h2');
formTitle.innerHTML='Create Meal'
backdrop.appendChild(formTitle)
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
let ingredientsList = document.createElement('ol');
backdrop.appendChild(ingredientsList);


//Instructions Link

let instructionLinkWrap = document.createElement('div');

let instructionLinkInput = document.createElement('input')
instructionLinkInput.setAttribute('type', 'text');
instructionLinkInput.setAttribute('placeholder', 'Paste Link or Leave Empty.');
instructionLinkWrap.appendChild(instructionLinkInput);

let instructionLinkButton = document.createElement('button');
instructionLinkButton.setAttribute('type', 'button');
instructionLinkButton.innerHTML='Add';
instructionLinkButton.addEventListener('click', ()=>{
    instructionLinkWrap.innerHTML=instructionLinkInput.value;
})

instructionLinkWrap.appendChild(instructionLinkButton);

backdrop.appendChild(instructionLinkWrap);






//SUBMIT BUTTON

let submitMealButton = document.createElement('button');
submitMealButton.setAttribute('type', 'button');
submitMealButton.innerHTML = 'Submit Meal';
backdrop.appendChild(submitMealButton);


mainC.appendChild(backdrop);

submitMealButton.addEventListener('click', ()=>{
    mainCon.removeChild(backdrop);
    createLandingPage(mainCon);
    submitMeal(mealName.value,ingredientsArr, mealType.value, instructionLinkInput.value);
 
});







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
        
        let ing = document.createElement('li');
        ing.innerHTML=ingName.value;
        ingList.appendChild(ing);
        ingName.value='';
        ingWrap.innerHTML='';
        }
        
    

})

ingList.appendChild(ingWrap);


}

function submitMeal(mealName, mealIngredients, mealType, instructionLink){

    let meal = {}

    meal.Name = mealName;
    meal.Ingredients = mealIngredients;
    meal.Type = mealType
    meal.Instructions = instructionLink;

    mealData(meal, meal.Type);

}