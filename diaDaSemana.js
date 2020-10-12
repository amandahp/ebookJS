//estrutura de decisão switch

var data = new Date();
var diaDaSemana = data.getDay();
var diaDaSemanaExtenso;

switch(diaDaSemana){
    case 1:
        diaDaSemanaExtenso = "domingo";
        break;
        case 2:
        diaDaSemanaExtenso = "segunda-feira";
        break;
        case 3:
        diaDaSemanaExtenso = "terça-feira";
        break;
        case 4:
        diaDaSemanaExtenso = "quarta-feira";
        break;
        case 5:
        diaDaSemanaExtenso = "quinta-feira";
        break;
        case 6:
        diaDaSemanaExtenso = "sexta-feira";
        break;
        case 7:
        diaDaSemanaExtenso = "sábado";
        break;
}

if (diaDaSemanaExtenso == "domingo"){
    alert("Hoje é Domingo." + " " + "Bom início de semana.");

} else if (diaDaSemanaExtenso == "sexta-feira"){
alert("Hoje é " + " " + diaDaSemanaExtenso + "." + " " + "Sextou.");
} else{
    alert("Hoje é " + " " + diaDaSemanaExtenso + ".");
}