var produto = Number(prompt("Me diga o valor da sua compra"))

if(produto < 20) {
    alert("Barato")
}else if(produto >= 20 && produto <= 100) {
    alert("Médio")
}else if(produto >100) {
    alert("Caro")
}