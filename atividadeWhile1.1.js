var numeroTabuada = parseInt(prompt("Insira um número"))
var multiplicador = 1
var contador = 0 

while(contador <= 3){
    console.log("tabuada do numero:", numeroTabuada)
    while(multiplicador <= 10){
        console.log(numeroTabuada, " x ", multiplicador, " = ", (numeroTabuada*multiplicador))
        multiplicador++
    }
    contador++
    numeroTabuada++
    multiplicador = 1 
}
