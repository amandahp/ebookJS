//calculo de quantas horas um funcionario excedeu sua carga horária semanal

var cargaHorariaSemanal = 44;
var saldoHoras = 0;
var nome = prompt("Informe o nome do funcionário: ", "Digite aqui");
var horasTrabalhadas = prompt("Informe o total de horas trabalhadas pelo funcionário" + " " + nome + " :", "Digite aqui");

//cálculo de horas

saldoHoras = horasTrabalhadas - cargaHorariaSemanal;

if(saldoHoras > 0){
    alert("O funcionário " + " " + nome + "," + " " + " fez" + " " + saldoHoras + " " + "hora(s) extras nesta semana.");
}else if (saldoHoras == 0){
    alert("O funcionário " + " " + nome + "," + " " + " não fez horas extras essa semana, trabalhando 44 horas semanais.")

}else{
    alert("O funcionário " + " " + nome + "," + " está devendo" + " " + saldoHoras + " horas.");

}