function createNavBar () 
{
    let navbar = document.createElement('div');
    navbar.className = "nav-bar";
    navbar.id = "navbar";

    let navBarContent = document.createElement('div');
    navBarContent.className = "nav-bar-content";

    let logoWrap = document.createElement('div');
    logoWrap.className = "logo";

    let logo = document.createElement('img');
    logo.src = "./images/logo.jpg";
    logo.ClassName = "logo";
    logoWrap.appendChild(logo);
    navBarContent.appendChild(logoWrap);

    let homeButton = document.createElement('div');
    homeButton.className = "navbutton";
    homeButton.id = "homebutton";
    homeButton.textContent = "Home";
    navBarContent.appendChild(homeButton);

    let menuButton = document.createElement('div');
    menuButton.className = "navbutton";
    menuButton.id = "menubutton";
    menuButton.textContent = "Menu";
    navBarContent.appendChild(menuButton);

    let contactButton = document.createElement('div');
    contactButton.className = "navbutton";
    contactButton.id = "contactbutton";
    contactButton.textContent = "Contact";
    navBarContent.appendChild(contactButton);


    navbar.appendChild(navBarContent); // add everythng to nav bar with a placement wrap. 

    document.getElementById("content").appendChild(navbar); // append navbar to content

}

export {createNavBar};