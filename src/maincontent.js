function createHome ()
{
let homeScreen = document.getElementById("content");

    let radio = document.createElement('INPUT'); 
    radio.setAttribute("type", "radio");
    radio.checked = true;
    radio.id = "tab1";
    radio.name = "tab";
    homeScreen.appendChild(radio);

    let homeLabel = document.createElement('LABEL');
    homeLabel.className = "tabButton";
    homeLabel.setAttribute("for", "tab1");
    homeScreen.appendChild(homeLabel);


    let theTab = document.createElement('div');
    theTab.className = "tab";
    let theContent = document.createElement('div');
    theContent.className = "content";

// wrap in tab class div
    let homeScreenContent = document.createElement('div');
    homeScreenContent.className = "homePage";
    homeScreenContent.textContent = "Welcome To The Bojangles Cafe!";

    let homeScreenPic = document.createElement('img');
    homeScreenPic.className = "home-pic";
    homeScreenPic.src = "./images/home.jpeg";
    homeScreenContent.appendChild(homeScreenPic);

    theContent.appendChild(homeScreenContent); // add to actual content w styling to  container in tabby
    theTab.appendChild(theContent); // add all content to tab for tabby
    homeScreen.appendChild(theTab); // append tabby syntactic info to actual container

}

export {createHome};