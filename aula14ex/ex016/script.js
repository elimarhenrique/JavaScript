function contar() {
    var inicio = document.querySelector("input#txtini")
    var fim = document.querySelector("input#txtfim")
    var passo = document.querySelector("input#txtpasso")
    var res = document.querySelector("div#res")
    var nInicio = Number(inicio.value)
    var nFim = Number(fim.value)
    var nPasso = Number(passo.value)

    if (nPasso == 0) {
        window.alert('Passo inválido. Considerando passo = 1')        
        nPasso = 1
    } 
    
    if(nInicio == 0 || nFim == 0 ) {
        res.innerHTML = `Impossível contar!`
    } else {
        res.innerHTML = `Contando... <br>`
        var i = nInicio
        do {
            res.innerHTML += `${i} <span>&#128073;</span>`
            i += nPasso
        } while(i <= nFim)
        res.innerHTML += `<span>&#127937;</span>`
    }
}