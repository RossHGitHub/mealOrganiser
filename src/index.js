import './style.css';
import { createForm } from './mealForm';
import { createLandingPage } from './landingPage';
import { displayMeals } from './myMeals';

let mainC = document.createElement('div');
mainC.setAttribute('id', 'mainC')

let addMeal = document.getElementById('addMeal');
let myMeals = document.getElementById('myMeals');

createLandingPage(mainC)

addMeal.addEventListener('click', ()=>{
    
    mainC.innerHTML='';
    createForm(mainC);
})

myMeals.addEventListener('click', ()=>{
    mainC.innerHTML = '';
   displayMeals(mainC);
})


