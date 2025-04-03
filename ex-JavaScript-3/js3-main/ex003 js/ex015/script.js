var nota = Number(prompt("Digite um nota de 0 a 10"))

if(nota >= 9) {
    alert("Excelente")
}else if(nota >= 7 && nota <= 8) {
    alert("Bom")
}else if(nota >= 5 && nota <= 6) {
    alert("Regular")
}else {
    alert("Insuficiente")
}