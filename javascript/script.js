const [inputName, inputPassword] = document.querySelectorAll("input");
const checkbox = document.querySelector(".inputBoxcheck");
const botaoArrow = document.querySelector(".btnArrow");

function ativando(){
    if(inputName.value && inputPassword.value.length >= 8){
        botaoArrow.removeAttribute("disabled");
        botaoArrow.classList.add("ativo");
        checkbox.removeAttribute("disabled");
        checkbox.classList.add("ativo");
    }else{
        botaoArrow.setAttribute("disabled", "disabled");
        botaoArrow.classList.remove("ativo");
        checkbox.setAttribute("disabled", "disabled");
        checkbox.classList.remove("ativo");
    }
}

inputName.addEventListener("input", ativando);
inputPassword.addEventListener("input", ativando);