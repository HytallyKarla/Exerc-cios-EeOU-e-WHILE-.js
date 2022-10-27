var fome = prompt("Você está com você? S para sim e N para não ")
var dinheiro = prompt("Você tem dinheiro? S para sim e N para não")

if(fome == "S" && dinheiro == "S"){
    console.log("Vá comer um lanche")
}else if (fome == "N" || dinheiro == "N"){
    console.log("É melhor você comer em casa")
}