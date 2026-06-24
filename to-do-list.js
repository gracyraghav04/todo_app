/*console.log("JS connected");

const  btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const value = document.getElementById("task").value;

    if (value === "") return;

    const li = document.createElement("li");
    li.classList.add("item");
    const text = document.createElement("span");
    text.innerText = value;
   


    const delbtn=document.createElement("button");
    delbtn.innerText="Remove";
    const checkbtn=document.createElement("input");
    checkbtn.type="checkbox";
    checkbtn.classList.add("checkbox");
    
    delbtn.addEventListener("click", ()=> {
      li.remove();});
    checkbtn.addEventListener("change",()=>{
      text.classList.add("completed");
      setTimeout(()=>{
        li.remove();},1000);
      });
         
    
  
    li.appendChild(text);
    li.appendChild(delbtn);
    li.appendChild(checkbtn);
    
    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
});*/
console.log("JS connected");

const btn = document.getElementById("btn");
const input = document.getElementById("task");
const list = document.getElementById("list");


let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];


function renderTasks() {
    list.innerHTML = "";

    savedTasks.forEach((taskText, index) => {
        const li = document.createElement("li");
        li.classList.add("item");

        const text = document.createElement("span");
        text.innerText = taskText;

        const delbtn = document.createElement("button");
        delbtn.innerText = "Remove";

        const checkbtn = document.createElement("input");
        checkbtn.type = "checkbox";

        
        delbtn.addEventListener("click", () => {
            savedTasks.splice(index, 1);
            updateStorage();
            renderTasks();
        });

  
        checkbtn.addEventListener("change", () => {
            if (checkbtn.checked) {
                setTimeout(() => {
                    savedTasks.splice(index, 1);
                    updateStorage();
                    renderTasks();
                }, 800);
            }
        });

        li.appendChild(text);
        li.appendChild(delbtn);
        li.appendChild(checkbtn);

        list.appendChild(li);
    });
}


function updateStorage() {
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}


btn.addEventListener("click", () => {
    const value = input.value.trim();

    if (value === "") return;

    savedTasks.push(value);

    input.value = "";

    updateStorage();
    renderTasks();
});


renderTasks();