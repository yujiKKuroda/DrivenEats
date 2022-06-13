let prato = 0;
let bebida = 0;
let sobremesa = 0;

function selectPratos (item) {
    if (prato <= 0){
        prato = 1;
    }
    const itemClicado = document.querySelector(".pratos .selecionado");
    if (itemClicado !== null) {
        itemClicado.classList.remove("selecionado");
    }

    item.classList.add("selecionado");
}

function selectBebidas (item) {
    if (bebida === 0){
        bebida = 1;
    }
    const itemClicado = document.querySelector(".bebidas .selecionado");
    if (itemClicado !== null) {
        itemClicado.classList.remove("selecionado");
    }

    item.classList.add("selecionado");
}

function selectSobremesas (item) {
    if (sobremesa === 0){
        sobremesa = 1;
    }
    const itemClicado = document.querySelector(".sobremesas .selecionado");
    if (itemClicado !== null) {
        itemClicado.classList.remove("selecionado");
    }

    item.classList.add("selecionado");
}

function marcar() {
    if (prato + bebida + sobremesa === 3){
        let confirmacao = document.querySelector(".rodape");
        confirmacao.classList.add("escondido");
        confirmacao = document.querySelector(".finalizar");
        confirmacao.classList.remove("escondido");
    }
}