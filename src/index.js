import './style.css';
import { createForm } from './mealForm';
import { createLandingPage } from './landingPage';
import { displayMeals } from './myMeals';
import { currentMenu } from './currentMenu';
import { randomize } from './mealData';

let mainC = document.createElement('div');
mainC.setAttribute('id', 'mainC')

let addMeal = document.getElementById('addMeal');
let myMeals = document.getElementById('myMeals');
let homeButton = document.getElementById('home');
let currentMenuButton = document.getElementById('currentMenu')

createLandingPage(mainC)

addMeal.addEventListener('click', ()=>{
    
    mainC.innerHTML='';
    createForm(mainC);
})

myMeals.addEventListener('click', ()=>{
    mainC.innerHTML = '';
   displayMeals(mainC);
})

homeButton.addEventListener('click', ()=>{
    mainC.innerHTML = '';
    createLandingPage(mainC);
})

currentMenuButton.addEventListener('click', ()=>{
    mainC.innerHTML='';
  currentMenu(mainC)
})
