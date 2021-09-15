const exm = document.querySelector("#title");
const clicked_class = "clicked";

function handleclick(){
    exm.classList.toggle(clicked_class);
}
function init(){
    exm.addEventListener("click", handleclick);
}

init();