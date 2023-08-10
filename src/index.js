import './style.css';
import { createForm } from './mealForm';

let addMeal = document.getElementById('createMealButton');

addMeal.addEventListener('click', ()=>{
    createForm();
})