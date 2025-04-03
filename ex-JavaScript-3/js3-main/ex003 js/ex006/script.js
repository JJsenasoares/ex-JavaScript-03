var peso = Number(prompt("Digite seu peso ex: 87.5"))
var altura = Number(prompt("Digite sua altura ex: 1.80"))

var IMC = (peso / Math.pow(altura, 2)).toFixed(2)

if(IMC < 18.5) { 
    alert(`Seu IMC = ${IMC} Abaixo do peso`)
}else if(IMC >= 18.5 && IMC <= 24.9) { 
    alert(`Sei IMC = ${IMC} Peso normal`)
}else if(IMC >= 25 && IMC <= 29.9) { 
    alert(`Seu IMC = ${IMC} Sobrepeso`)
}else { 
    alert(`Seu IMC = ${IMC} Obsidade`) 
}          