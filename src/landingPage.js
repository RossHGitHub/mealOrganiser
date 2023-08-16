export {createLandingPage}

let createLandingPage = function(main){
    

    let bod = document.querySelector('body');
    

    let mainHead = document.createElement('h1');
    mainHead.innerHTML = 'Food, Glorious Food..'
    main.appendChild(mainHead)

    let mainPara = document.createElement('p');
    mainPara.innerHTML = 'Welcome to this meal prep app! Add your meals to me, then click randomize below, and I will create a nice variety of meals for you to enjoy throughout your week!'
    main.appendChild(mainPara);

bod.appendChild(main);
}