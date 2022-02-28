let addToDoButton = document.getElementById("addToDo");
let toDoConatiner = document.getElementById("toDoConatiner");
let inputField = document.getElementById("input");

addToDoButton.addEventListener("click", function () {
    var paragraph =  document.createElement("p")
    paragraph.classList.add("paragraph-styling")
    paragraph.innerText = inputField.value
    toDoConatiner.appendChild(paragraph)
    inputField.value = "";
    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through"
        
    })
    paragraph.addEventListener("dblclick", function() {
        toDoConatiner.removeChild(paragraph)

         
    })
    
})