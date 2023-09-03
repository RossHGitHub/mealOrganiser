import { randomize } from "./mealData";
import { currentMenu } from "./currentMenu";

export {createLandingPage}

let createLandingPage = function(main){
    

    let bod = document.querySelector('body');
    

    let mainHead = document.createElement('h1');
    mainHead.innerHTML = 'Food, Glorious Food..'
    main.appendChild(mainHead)

    let mainPara = document.createElement('p');
    mainPara.style.margin='0px 200px 0px 200px';
    mainPara.style.fontSize='20px'
    mainPara.innerHTML = 'This is a basic meal Organiser. Input your meals using the "Add Meal" at the top, then once you have enough meals, click the Randomize button below, and I will give you a random selection of 5 meals, along with the ingredients you will need to make the meals. I will also provide you with a QR code you can scan on your phone to make a list of all the ingredients. '
    mainPara.setAttribute('id', 'mainPara');
    main.appendChild(mainPara);

    let randomizeButton = document.createElement('button');
    randomizeButton.setAttribute('type', 'button');
    randomizeButton.setAttribute('id', 'randomizeButton')
    randomizeButton.innerHTML='Randomize';
    main.appendChild(randomizeButton);


randomizeButton.addEventListener('click', ()=>{
    randomize();
    currentMenu(mainC);
    
});


bod.appendChild(main);
}