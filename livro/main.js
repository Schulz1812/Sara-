const btnGerar = document.getElementById("gerar-livro")
btnGerar.addEventListener("click",()=>{
    const elemNome = document.getElementById("nome")
    const elemAutor = document.getElementById("autor")
    const elemPagina = document.getElementById("paginas")
    const elemPais = document.getElementById("pais")
    const autor = document.getElementById("nome-autor").value
    const paginas = document.getElementById("numero-paginas").value
    const pais = document.getElementById("pais-lancamento").value
    const livro = document.getElementById("nome-livro").value

    if(paginas < 1){
        elemPagina.innerText = paginas
    }else{
        elemPagina.innerHTML = 0
    }
    elemNome.innerText = livro
    elemAutor.innerText = autor
    elemPagina.innerText = paginas
    elemPais.innerText = pais



})