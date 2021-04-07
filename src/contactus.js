
function createContactMain ()
{
let main = document.createElement('div');
main.className = "main-container";
main.id = "main";
document.getElementById("content").appendChild(main);
}

function createContactPage ()
{
let contactInfo = document.createElement('div');
contactInfo.className = "contact-description";
contactInfo.textContent = "You cant reach us by email at: thebojangles.@gmail.com" + "Or ask for Mr Bojangles by phone at 333-333-3333";
document.getElementById("main").appendChild(contactInfo);
}


export {createContactPage, createContactMain}