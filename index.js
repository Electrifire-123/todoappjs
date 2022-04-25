const tasklist= [];

function changeHere() {
        const name=document.getElementById("name").value
        const tempObject={
                taskname:name
        }
        tasklist.push(tempObject);
        console.log(tasklist);

        addtaskonScreen()

}

function addtaskonScreen() {
        const element=document.createElement("div")
        element.setAttribute("class","child")
        element.innerHTML=`<h2>${tasklist[tasklist.length-1].taskname}</h2>`

        const ExistingElement=document.getElementById("parent")
        ExistingElement.appendChild(element)

        const hr = document.createElement("hr")
        hr.setAttribute("class", "hr");
        element.appendChild(hr);

        const addBtn = document.createElement("i");
        addBtn.setAttribute("class", "addBtn fa-solid fa-circle-plus");
        addBtn.setAttribute("id","addBtn")
        element.appendChild(addBtn);
        // addBtn.onclick = function() { call2ndPopup() };
        
        
        
        const delBtn = document.createElement("i");
        delBtn.setAttribute("class", "delBtn fa-solid fa-trash");
        element.appendChild(delBtn);

        hidePopup();
        
}


function hidePopup(){
        let popup = document.getElementById("popup")
        popup.style.display = "none";

        let msg = document.getElementById("msg");
        msg.style.display = "none"

        let blur = document.getElementById("main");
        blur.style.filter = "blur(0px)";

        let addBtnFn = document.getElementById("addBtn")
        addBtnFn.addEventListener("click", call2ndPopup);

        
}

function callPopup(){
        let popup = document.getElementById("popup")
        popup.style.display = "flex";

        let blur = document.getElementById("main");
        blur.style.filter = "blur(5px)";
}

function call2ndPopup(){
        let pop = document.getElementById("popup2");
        pop.style.display = "flex";

        let blur = document.getElementById("main");
        blur.style.filter = "blur(5px)";
}

const items = [];
function changeHeretoo(){
        const item=document.getElementById("item").value
        const tempObject={
                itemName:item
        }
        items.push(tempObject);
        console.log(items);

        addtaskon2ndScreen()
}

function addtaskon2ndScreen(){
        const element=document.createElement("div");
        element.setAttribute("class","grandChild");
        element.innerHTML=`<span>${items[items.length-1].itemName}</span><button>Mark Done</button>`;

        const ExistingElement=document.getElementById("child");
        ExistingElement.appendChild(element);

        hide2ndPopup();
}

function hide2ndPopup(){
        let popup2 = document.getElementById("popup2");
        popup2.style.display = "none";

        let blur = document.getElementById("main");
        blur.style.filter = "blur(0px)";
}

