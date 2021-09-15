const todoForm = document.querySelector(".todoForm"),
todoInput = todoForm.querySelector("input");
todoList = document.querySelector(".todoList");

const TODOS_LS = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function filterFn(toDo){
    return toDo.id
}

function deleteToDo(event){
 const btn = event.target;
 const li = btn.parentNode;
 todoList.removeChild(li);
 const cleanToDos = toDos.filter(function(toDo){
     return toDo.id !== parseInt(li.id);
 });
 toDos = cleanToDos;
 saveToDos();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length +1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text: text,
        id: newId
    };
    toDos.push(todoObj);
    saveToDos();
    todoInput.value = null;
    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
    });
    }
}

function init(){
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit);
}
init();