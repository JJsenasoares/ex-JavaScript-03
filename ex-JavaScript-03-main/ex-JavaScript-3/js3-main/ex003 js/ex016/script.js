var regiao = Number(prompt(` ==== Digite sua região ====
    [1] - Brasil
    [2] - EUA 
    ================= `))
    var idade = Number(prompt("Digite sua idade"))

    if(regiao == 1 && idade >= 18) {
        alert(`Brasil = ${idade} anos = Maior idade`)

    }else if(regiao == 1 && idade < 18) {
        alert(`Brasil ${idade} anos = Menor de idade`)

    }else if(regiao == 2 && idade >= 21) {
        alert(`EUA ${idade} anos = Maior idade` )
        
    }else {
        alert(`EUA ${idade} anos = Menor idade`)
    }