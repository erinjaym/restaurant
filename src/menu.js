
function createMenu()
{
    let menu = document.getElementById("content");

    let radio = document.createElement('INPUT'); 
    radio.setAttribute("type", "radio");
    radio.checked = true;
    radio.id = "tab2";
    radio.name = "tab";
    menu.appendChild(radio);

    let menuLabel = document.createElement('LABEL');
    menuLabel.className = "tabButton";
    menuLabel.setAttribute("for", "tab2");
    menu.appendChild(menuLabel);

    let theTab = document.createElement('div');
    theTab.className = "tab";
    let theContent = document.createElement('div');
    theContent.className = "content";

    let menuItems = document.createElement('div');
    menuItems.className = "menu";
    
    createMenuItem("./images/Cacao cookies.png", "Cacao cookies baked the the goodness of baking things. All natural ingredients for an all natural cookie.");
    createMenuItem("./images/hotcoco.png", "Amazingly warm hot coco!");

    function createMenuItem (pictureSrc, review)
        {
        let foodItem = document.createElement('div');
        let food = document.createElement('img');
        food.src = pictureSrc;
        food.className = "food-picture";
        foodItem.appendChild(food);
        menuItems.appendChild(foodItem);

        let foodItemReview = document.createElement('div');
        foodItemReview.className = "item-description";
        foodItemReview.textContent = review;
        menuItems.appendChild(foodItemReview);
        }


    theContent.appendChild(menuItems);  // add menu to content for tabby
    theTab.appendChild(theContent);     // add content to a tab for tabby
    menu.appendChild(theTab);       // add content to main page for tabby to display
}

// later project make module out of menu and create functions to create menu Items externally


export {createMenu};