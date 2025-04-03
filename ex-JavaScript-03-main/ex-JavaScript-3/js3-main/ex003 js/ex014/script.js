var grauCelsius = Number(prompt("Digite a temperatura em graus Celsius "))

if(grauCelsius < 15) {
    alert("Frio")
}else if(grauCelsius >= 15 && grauCelsius <= 25) {
    alert("Agradavel")
}else {
    alert("Quente")
}