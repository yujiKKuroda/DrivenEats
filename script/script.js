function select (item) {
    const itemClicado = document.querySelector(".selecionado");
    if (itemClicado !== null) {
        itemClicado.classList.remove("selecionado");
    }

    item.classList.add("selecionado");
}