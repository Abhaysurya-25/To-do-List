const input = document.getElementById("add-text");
const lists = document.getElementById("tasks");
const button = document.getElementById("btn-01");

button.onclick = addtask;

function addtask(){
    if(input.value === ""){
        alert("Please enter your Task")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        lists.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="&#10006";
        span.style.scale=("0.9")
        li.appendChild(span);
    }
    input.value="";
    locsave();
}

lists.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        locsave();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        locsave();
    }
}, false);

function locsave(){
    localStorage.setItem("list", lists.innerHTML);
}

function display(){
    lists.innerHTML=localStorage.getItem("list");
}

display();
