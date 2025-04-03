var hora = Number(prompt("Digite a hora 0 a 23"))

if(hora >= 5 && hora <= 11) {
    alert(`${hora}h da Manhã`)
}else if(hora >= 12 && hora <= 17) {
    alert(`${hora}h da tarde`)
}else if(hora >= 18 && hora <= 23) {
    alert(`${hora}h da noite`)
}else {
    alert(`${hora}h da madrugada`)
}