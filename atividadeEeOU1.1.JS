/*1. Escreva um algoritmo que pergunte ao usuário se ele está com fome e se ele tem
dinheiro, guarde as respostas separadamente. Com base nas respostas do usuário:
a. Se ele estiver com fome E com dinheiro, exiba uma mensagem
recomendando uma lanchonete.
b. Se não estiver com fome OU não tiver dinheiro, exiba uma mensagem
informando que é melhor ele comer em casa.*/

var fome = prompt("Você está com você? S para sim e N para não ")
var dinheiro = prompt("Você tem dinheiro? S para sim e N para não")

if(fome == "S" && dinheiro == "S"){
    console.log("Vá comer um lanche")
}else if (fome == "N" || dinheiro == "N"){
    console.log("É melhor você comer em casa")
}