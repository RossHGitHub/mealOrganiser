export { currentMenu };

function currentMenu(main) {
    main.innerHTML = '';
    let qrList = [];
    let mealArea = document.createElement('div');
    mealArea.classList = 'mealArea';
    let mealAreaHead = document.createElement('h2');
    mealAreaHead.innerHTML = 'Current Menu';
    let mealDisplay = document.createElement('div');
    mealDisplay.classList = 'mealDisplay';

    mealArea.appendChild(mealAreaHead);
    mealArea.appendChild(mealDisplay);
    main.appendChild(mealArea);

    let ingredientArea = document.createElement('div');
    ingredientArea.classList = 'ingredientsWrap'
    let ingrTitle = document.createElement('h2');
    ingrTitle.innerHTML = 'Ingredients For This Week';
    ingredientArea.appendChild(ingrTitle);

    let weeklyIngredients = document.createElement('ol');
    weeklyIngredients.setAttribute('id', 'weeklyIngredients')
    ingredientArea.appendChild(weeklyIngredients);
    main.appendChild(ingredientArea);

    let currentMenuMeals = JSON.parse(localStorage.getItem('currentMenu'));
    let ingredientCounts = {};

    currentMenuMeals.forEach(element => {
        if (element === null) {
            return;
        }

        let mealWrap = document.createElement('div');
        mealWrap.classList = 'mealWrap';

        let mealName = document.createElement('div');
        mealName.innerHTML = element.Name;
        mealName.setAttribute('class', 'mealName')
        mealWrap.appendChild(mealName);

        let mealType = document.createElement('div');
        mealType.innerHTML = `Type: ${element.Type}`;
        mealWrap.appendChild(mealType);

        let mealInst = document.createElement('div');
        mealWrap.appendChild(mealInst);
        mealInst.innerHTML = element.Instructions === '' ? 'Recipe: None' : `Recipe: ${element.Instructions}`;

        let mealIngr = document.createElement('ol');
        element.Ingredients.forEach(item => {
            let ingr = document.createElement('li');
            ingr.innerHTML = item;
            mealIngr.appendChild(ingr);

            // Count ingredients and update ingredientCounts
            if (ingredientCounts[item]) {
                ingredientCounts[item]++;
            } else {
                ingredientCounts[item] = 1;
            }
        });

        mealWrap.appendChild(mealIngr);
        mealDisplay.appendChild(mealWrap);
    });

    // Display the ingredientCounts in weeklyIngredients
    for (const ingredient in ingredientCounts) {
        if (ingredientCounts.hasOwnProperty(ingredient)) {
            if (ingredientCounts[ingredient] > 1) {
                // If the ingredient appears more than once, display it as "Ingredient X count"
                const weeklyIngr = document.createElement('li');
                weeklyIngr.innerHTML = `${ingredient} X ${ingredientCounts[ingredient]}`;
                weeklyIngredients.appendChild(weeklyIngr);
                qrList.push(weeklyIngr.innerHTML)

            } else {
                // If the ingredient appears only once, display it as is
                const weeklyIngr = document.createElement('li');
                weeklyIngr.innerHTML = ingredient;
                weeklyIngredients.appendChild(weeklyIngr);
                qrList.push(weeklyIngr.innerHTML);
            }
        }
    }
    getQRCode(qrList, main);
}

function getQRCode(list, wrapper){
    // Create a formatted list of ingredients with checkboxes
    const formattedList = list.map((ingredient) => `[ ] ${ingredient}`).join('\n');

    // Encode the formatted list into the QR code
    const qrCodeText = encodeURIComponent(formattedList);
    const qrCodeImageUrl = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${qrCodeText}`;

    // Create the QR code image element
    let QRImage = document.createElement('img');
    QRImage.setAttribute('id', 'qrCode');
    QRImage.setAttribute('src', qrCodeImageUrl);
    wrapper.appendChild(QRImage);
}
