console.log("JS connected");

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
});