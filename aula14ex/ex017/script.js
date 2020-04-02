function tabuada() {
    var num = document.querySelector("input#txtnum")
    var res = document.querySelector("select#res")
    var numero = Number(num.value)

    res.innerHTML = ``
    for(var i=1; i<=10; i++) {
        res.innerHTML += `<option>${numero} x ${i} = ${i * numero}<br></option>`
    }

}