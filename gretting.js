const form = document.querySelector(".js-form");
input = document.querySelector("input"),
gretting = document.querySelector('.js-grettings');
remove = document.querySelector('.js-remove');

const user_Stroagy = "currentName";
const showclass = "showing";

function removeName(){
    localStorage.removeItem(user_Stroagy);
    window.location.reload();
}

function saveName(text){
    localStorage.setItem(user_Stroagy, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paint(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(showclass);
    form.addEventListener("submit" ,handleSubmit);
}

function paint(text){
    form.classList.remove(showclass);
    gretting.classList.add(showclass);
    gretting.innerText = `Hello ${text}`;    
}
function loadName(){
    const currentName = localStorage.getItem(user_Stroagy);
    if(currentName === null){
        askForName();
    }else{
        paint(currentName);
    }
}


function init(){
    loadName();
    remove.addEventListener("click", removeName);
}
init();