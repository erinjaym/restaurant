

function createNavBar () 
{
    let navbar = document.createElement('div');
    navbar.className = "nav-bar";
    navbar.id = "navbar";

    let logoWrap = document.createElement('div');
    logoWrap.className = "logo";

    let logo = document.createElement('img');
    logo.src = "./images/logo.jpg";
    logo.ClassName = "logo";
    logoWrap.appendChild(logo);
    navbar.appendChild(logoWrap);

    let menuButton = document.createElement('div');
    menuButton.className = "navbutton";
    menuButton.id = "menubutton";
    menuButton.textContent = "Menu";
    navbar.appendChild(menuButton);

    let homeButton = document.createElement('div');
    homeButton.className = "navbutton";
    homeButton.id = "homebutton";
    homeButton.textContent = "Home";
    navbar.appendChild(homeButton);


    let contactButton = document.createElement('div');
    contactButton.className = "navbutton";
    contactButton.id = "contactbutton";
    contactButton.textContent = "Contact";
    navbar.appendChild(contactButton);

    document.getElementById("content").appendChild(navbar); // append navbar to content

}

export {createNavBar};