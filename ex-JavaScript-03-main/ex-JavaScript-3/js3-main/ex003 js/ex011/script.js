var valorTotal = Number(prompt("Digite o valor total da compra"))
var codigoDesconto = prompt("Digite o codigo de descocto")

if (codigoDesconto == "DESC10") {

    alert("Desconto aplicado!")

    var desconto = valorTotal * (10 / 100)
    var valorTotalDesconto = valorTotal - desconto

    alert(`Preço Inicial = ${valorTotal}
        Desconto Aplicado = ${desconto}
        Preço Total = ${valorTotalDesconto}`);
} else {
    alert(`Codigo de desconto não Existe
  Preço total = ${valorTotal}`);
}
