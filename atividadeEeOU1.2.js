/*2. Escreva um algoritmo que faça as seguintes perguntas ao seu usuário, guarde as
respostas separadamente:
a. Se ele está com o cinto de segurança
b. Se ele está alcoolizado
c. Se o semáforo está verde
Com base nas respostas do usuário informe que o usuário pode prosseguir se
estiver com o cinto E não estiver alcoolizado E o semáforo estiver verde, se não
informar que ele não deve prosseguir.*/

var cinto = prompt("Você esta com cinto de segurança? S ou N ")
var alcool = prompt("Você esta alcoolizado? S ou N")
var semaforo = prompt("O semáforo está verde? S ou N")

if(cinto == "S" && alcool == "N" && semaforo == "S"){
    console.log("Você pode prosseguir")
} else if(cinto == "N" || alcool == "S" || semaforo == "N"){
    console.log("Você não deve prosseguir")
}