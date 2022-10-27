var cinto = prompt("Você esta com cinto de segurança? S ou N ")
var alcool = prompt("Você esta alcoolizado? S ou N")
var semaforo = prompt("O semáforo está verde? S ou N")

if(cinto == "S" && alcool == "N" && semaforo == "S"){
    console.log("Você pode prosseguir")
} else if(cinto == "N" || alcool == "S" || semaforo == "N"){
    console.log("Você não deve prosseguir")
}