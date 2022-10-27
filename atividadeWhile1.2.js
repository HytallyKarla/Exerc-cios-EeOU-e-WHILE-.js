var nome = prompt("Insira seu nome")
var cpf = parseInt(prompt("Insira seu CPF"))


var saldoTotal = 0 
var media = 0 
var contador = 0 
var maiorValor = 0
var segurança = true

while(segurança){
 var opçao = prompt("O que deseja? Digite: S para saque e D para deposito")
 var valor = parseInt(prompt("Digite um valor"))
 
 media = media + valor

 if(opçao == "S" && valor <= saldoTotal && valor > 0){
    saldoTotal = saldoTotal - valor
    contador++

 }else if (opçao == "D" && valor > 0){
    saldoTotal = saldoTotal + valor
    contador++
    
 }else {
    console.log("Valor incorreto")
 }

 if(valor > maiorValor){
    maiorValor = valor
 }

 var inputUsuario = prompt("Digite 1 para continuar e 2 para parar")
 if(inputUsuario == 2){
    segurança = false
 }else if (inputUsuario == 1){
    segurança = true
 }
}
console.log("Saldo total na conta: ", saldoTotal)

console.log("O maior valor inserido é:", maiorValor)

console.log("A média dos valores inseridos foi:", media / contador)

console.log("Fim da Operação")

