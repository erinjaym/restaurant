(()=>{"use strict";!function(){let e=document.createElement("div");e.className="nav-bar",e.id="navbar";let t=document.createElement("div");t.className="nav-bar-content";let n=document.createElement("div");n.className="logo";let a=document.createElement("img");a.src="./images/logo.jpg",a.ClassName="logo",n.appendChild(a),t.appendChild(n);let c=document.createElement("div");c.className="navbutton",c.id="homebutton",c.textContent="Home",t.appendChild(c);let d=document.createElement("div");d.className="navbutton",d.id="menubutton",d.textContent="Menu",t.appendChild(d);let l=document.createElement("div");l.className="navbutton",l.id="contactbutton",l.textContent="Contact",t.appendChild(l),e.appendChild(t),document.getElementById("content").appendChild(e)}(),function(){let e=document.getElementById("content"),t=document.createElement("INPUT");t.setAttribute("type","radio"),t.checked=!0,t.id="tab3",t.name="tab",e.appendChild(t);let n=document.createElement("LABEL");n.className="tabButton",n.setAttribute("for","tab3"),e.appendChild(n);let a=document.createElement("div");a.className="tab";let c=document.createElement("div");c.className="content";let d=document.createElement("div");d.className="contact-description",d.textContent="You can reach us by email at: thebojangles.@gmail.com",c.appendChild(d),a.appendChild(c),e.appendChild(a)}(),function(){let e=document.getElementById("content"),t=document.createElement("INPUT");t.setAttribute("type","radio"),t.checked=!0,t.id="tab2",t.name="tab",e.appendChild(t);let n=document.createElement("LABEL");n.className="tabButton",n.setAttribute("for","tab2"),e.appendChild(n);let a=document.createElement("div");a.className="tab";let c=document.createElement("div");c.className="content";let d=document.createElement("div");function l(e,t){let n=document.createElement("div"),a=document.createElement("img");a.src=e,a.className="food-picture",n.appendChild(a),d.appendChild(n);let c=document.createElement("div");c.className="item-description",c.textContent=t,d.appendChild(c)}d.className="menu",l("./images/Cacao cookies.png","Cacao cookies baked the the goodness of baking things. All natural ingredients for an all natural cookie."),l("./images/hotcoco.png","Amazingly warm hot coco!"),c.appendChild(d),a.appendChild(c),e.appendChild(a)}(),function(){let e=document.getElementById("content"),t=document.createElement("INPUT");t.setAttribute("type","radio"),t.checked=!0,t.id="tab1",t.name="tab",e.appendChild(t);let n=document.createElement("LABEL");n.className="tabButton",n.setAttribute("for","tab1"),e.appendChild(n);let a=document.createElement("div");a.className="tab";let c=document.createElement("div");c.className="content";let d=document.createElement("div");d.className="homePage",d.textContent="Welcome To The Bojangles Cafe!";let l=document.createElement("img");l.className="home-pic",l.src="./images/home.jpeg",d.appendChild(l),c.appendChild(d),a.appendChild(c),e.appendChild(a)}(),function(){function e(e){let t=e.target.id;"menubutton"==t?document.getElementById("tab2").checked=!0:"homebutton"==t?document.getElementById("tab1").checked=!0:"contactbutton"==t?document.getElementById("tab3").checked=!0:console.log("did Nothing")}document.getElementById("menubutton").addEventListener("click",e),document.getElementById("homebutton").addEventListener("click",e),document.getElementById("contactbutton").addEventListener("click",e)}()})();