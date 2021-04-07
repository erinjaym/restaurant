import {createNavBar} from './navbar.js';
import {createHome} from './maincontent.js';
import {createMenu} from './menu.js';
import {createContactPage} from './contactus.js';

createNavBar();
createContactPage();
createMenu(); 
createHome();
pageSelector();


function pageSelector () {
    let menuToggle = document.getElementById('menubutton');
    let theToggle = menuToggle.addEventListener("click", toggle);
    let homeToggle = document.getElementById('homebutton');
    let theToggle2 = homeToggle.addEventListener("click", toggle);
    let contactToggle = document.getElementById("contactbutton");
    let theToggle3 = contactToggle.addEventListener("click", toggle);

    function toggle (e)
    {
    let tabid = e.target.id; 
    console.log(typeof tabid);

        if (tabid == "menubutton")
        {
        let menuToggle = document.getElementById('tab2');
        menuToggle.checked = true; 
        }

        else if (tabid == "homebutton")
        {
            let homePageToggle = document.getElementById('tab1');
            homePageToggle.checked = true; 
        }

        else if (tabid == "contactbutton")
        {
            console.log("is contact");
            let contactPageToggle = document.getElementById('tab3');
            contactPageToggle.checked = true; 
        }
        else // base case no menu button clicked
        {
            console.log("did Nothing");
        }

    }
}

