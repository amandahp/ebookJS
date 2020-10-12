//validar procedimento de craiçaõ de CNH utilizando if
var nome = prompt("Informe o nome do(a) candidato(a):", "Digite aqui");
var idade = prompt("Informe a idade do(a) candidato(a) " + nome, "Digite aqui");

//verificação utilizando if

if(parseInt(idade) >= 18){ //parseInt tem como função converter o conteúdo da var para inteiro
    alert("O candidato " + " " + nome + " " + "está apto para iniciar o processo.");
}else {
    alert("O candidato " + " " + nome + " " + "não está apto para iniciar o processo.");
}
