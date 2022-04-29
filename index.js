const tasklist= [];
const items = [];
let addtaskonScreen;
let changeHere;
// const btnToAddTaskOnScreen = document.getElementById
const  addTaskBtn = document.getElementById("addTaskBtn");
        
        function callPopup(){
                let popup = document.getElementById("popup")
                popup.style.display = "flex";
        
                let blur = document.getElementById("main");
                blur.style.filter = "blur(5px)";

                changeHere = function () {
                        const name=document.getElementById("name").value
                        const tempObject={
                                taskname:name
                        }
                        tasklist.push(tempObject);
                        console.log(tasklist);
                        
                        
                        
                                const element=document.createElement("div")
                                element.setAttribute("class","child")
                                // element.setAttribute("id", "child");
                                element.innerHTML=`<h2>${tasklist[tasklist.length-1].taskname}</h2>`
                        
                                const ExistingElement=document.getElementById("parent")
                                ExistingElement.appendChild(element)
                        
                                const hr = document.createElement("hr")
                                hr.setAttribute("class", "hr");
                                element.appendChild(hr);
                        
                                const addBtn = document.createElement("i");
                                addBtn.setAttribute("class", "addBtn fa-solid fa-circle-plus");
                                addBtn.setAttribute("id","addBtn")
                                addBtn.setAttribute
                                element.appendChild(addBtn);
                                const delBtn = document.createElement("i");
                                delBtn.setAttribute("class", "delBtn fa-solid fa-trash");
                                
                                element.appendChild(delBtn);
                                hidePopup();
                                addBtn.onclick = function (){
                                        let pop = document.getElementById("popup2");
                                        pop.style.display = "flex";
                                
                                        let blur = document.getElementById("main");
                                        blur.style.filter = "blur(5px)";
                                        
                                        addTaskBtn.onclick = function (){
                                                const item = document.getElementById("item").value
                                                const tempObject1={
                                                        itemName:item
                                                }
                                                        items.push(tempObject1);
                                                        console.log(items);
                                        
                                                
                                                
                                                        const element2=document.createElement("div");
                                                        element2.setAttribute("class","grandChild");
                                                        element2.innerHTML=`<span>${items[items.length-1].itemName}</span><button>Mark Done</button>`;
                                                
                                                        // const ExistingElement=document.getElementById("child");
                                                        element.appendChild(element2);
                                                
                                                        hide2ndPopup();
                                                }
                                        }
                                }
        }


function hidePopup(){
        let popup = document.getElementById("popup")
        popup.style.display = "none";

        let msg = document.getElementById("msg");
        msg.style.display = "none"

        let blur = document.getElementById("main");
        blur.style.filter = "blur(0px)";

        // let addBtnFn = document.getElementById("addBtn")
        // addBtnFn.addEventListener("click", call2ndPopup);

        
}

function hide2ndPopup(){
        let popup2 = document.getElementById("popup2");
        popup2.style.display = "none";

        let blur = document.getElementById("main");
        blur.style.filter = "blur(0px)";
}