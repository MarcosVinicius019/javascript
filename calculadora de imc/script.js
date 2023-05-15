function calcular() {
    var nome = document.getElementById('txtn').value
    var idade = document.getElementById('txti').value
    var altura = document.getElementById('txta').value
    var peso = document.getElementById('txtp').value


var calculo = peso /(altura * altura);
var imc = calculo.toFixed(1);

if (nome == 0 || idade == 0 || altura == 0 || peso == 0) {


    window.alert('Por favor, insira todos os dados!')

} 

else {
    res.innerHTML = (`Nome:${nome}`)
    res.innerHTML = (`idade:${idade}`)
    res.innerHTML = (`Seu IMC é:${imc}`)
}
}