
function createContactPage ()
{
    let main = document.getElementById("content");

    let radio = document.createElement('INPUT'); 
    radio.setAttribute("type", "radio");
    radio.checked = true;
    radio.id = "tab3";
    radio.name = "tab";
    main.appendChild(radio);

    let contactLabel = document.createElement('LABEL');
    contactLabel.className = "tabButton";
    contactLabel.setAttribute("for", "tab3");
    main.appendChild(contactLabel);

    let theTab = document.createElement('div');
    theTab.className = "tab";
    let theContent = document.createElement('div');
    theContent.className = "content";

    let contactInfo = document.createElement('div');
    contactInfo.className = "contact-description";
    contactInfo.textContent = "You can reach by email at: thebojangles.@gmail.com";

    theContent.appendChild(contactInfo);    // add info to content wrapper for tabby
    theTab.appendChild(theContent);         // add content to tab wrapper for tabby
    main.appendChild(theTab);   // add it all to main

}


export {createContactPage}