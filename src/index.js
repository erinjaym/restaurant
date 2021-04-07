import {createNavBar} from './navbar.js';
import {createHome} from './maincontent.js';
import {createMenu} from './menu.js';

createNavBar();
createMenu(); 
createHome();
pageSelector();


function pageSelector () {
    let menuToggle = document.getElementById('menubutton');
    let theToggle = menuToggle.addEventListener("click", toggle);
    let homeToggle = document.getElementById('homebutton');
    let theToggle2 = homeToggle.addEventListener("click", toggle);

    function toggle (e)
    {
    let tabid = e.target.id; 
    console.log(typeof tabid);

        if (tabid == "menubutton")
        { console.log("is Menu!");
        let menuToggle = document.getElementById('tab2');
        menuToggle.checked = true; 
        }

        else if (tabid == "homebutton")
        {
            console.log("is Home page!");
            let homePageToggle = document.getElementById('tab1');
            homePageToggle.checked = true; 
        }

        else 
        {console.log('dont do shit');}

    }
}

