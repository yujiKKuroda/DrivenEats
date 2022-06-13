let prato = 0;
let nomePrato = "";
let precoPrato = "";
let bebida = 0;
let nomeBebida = "";
let precoBebida = "";
let sobremesa = 0;
let nomeSobremesa = "";
let precoSobremesa = "";

function selectPratos (item) {
    if (prato <= 0){
        prato = 1;
    }
    const itemClicado = document.querySelector(".pratos .selecionado");
    if (itemClicado !== null) {
        itemClicado.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    nomePrato = document.querySelector(".pratos .selecionado .produto").innerHTML;
    precoPrato = document.querySelector(".pratos .selecionado .preco p").innerHTML;
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
    nomeBebida = document.querySelector(".bebidas .selecionado .produto").innerHTML;
    precoBebida = document.querySelector(".bebidas .selecionado .preco p").innerHTML;
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
    nomeSobremesa = document.querySelector(".sobremesas .selecionado .produto").innerHTML;
    precoSobremesa = document.querySelector(".sobremesas .selecionado .preco p").innerHTML;
}

function marcar() {
    if (prato + bebida + sobremesa === 3){
        let confirmacao = document.querySelector(".rodape");
        confirmacao.classList.add("escondido");
        confirmacao = document.querySelector(".finalizar");
        confirmacao.classList.remove("escondido");
    }
}