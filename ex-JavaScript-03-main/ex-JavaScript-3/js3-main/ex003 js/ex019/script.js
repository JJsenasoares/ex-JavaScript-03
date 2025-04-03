var nota1 = Number(prompt("Diga me sua nota"))
var nota2 = Number(prompt("Diga me sua nota"))
var nota3 = Number(prompt("Diga me sua nota"))

var media = (nota1 + nota2 + nota3) / 3

if(media >= 6) {
    alert("Aprovado")
}else {
    alert("Reprovado")
}