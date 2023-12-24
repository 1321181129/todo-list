const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li=doccument.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendchild(li);
        let span = document.createElement("span");
        span.innerHtml = "\u00d7";
        li.appendchild(span);
        }
         inputBox.value = "";
         saveData();
    }
    
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.TagName === "SPAN"){
         e.target.parentElement.remove();
         saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listConatiner.innerHtml)

}

 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }