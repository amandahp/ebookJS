/**Objeto Date: var que descobre a hora 

var dataCompleta;
dataCompleta = new Date; //Date instância que consegue captar todas as informações da data

dataCompleta.getDay(); //dia da semana em números
dataCompleta.getDate(); //dia do mês
dataCompleta.getMonth(); //mês
dataCompleta.getFullYear(); //ano
dataCompleta.getHours(); //hora
dataCompleta.getMinutes();
dataCompleta.getSeconds();

alert(dataCompleta); */

/**var dataCompleta;
var horaAtual;

//criando instância do objeto Date para pegar a hora atual
dataCompleta = new Date();
horaAtual = dataCompleta.getHours();

if(horaAtual < 12){
    alert("Bom dia");
}else if  (horaAtual < 18){
    alert("Boa tarde");
}else{
    alert("Boa noite");
}
*/

//verificando se é dia de pagamento hihi
var dataCompleta;
var diaAtual;

dataCompleta = new Date();
diaAtual = dataCompleta.getDate();

if(diaAtual == 5){
    alert("Uhuuul, é dia de pagamento");
}else if (diaAtual == 20){
    alert("Uhuuul, é dia de vale");
}else{
    alert("Infelizmente não é dia de pagamento, trabalha mais.")
}
