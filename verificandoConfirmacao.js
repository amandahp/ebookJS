//comando confirm cria uma janela em que existe botões ok e cancela

var continuar = confirm("Deseja continuar a operação?");

if(continuar == true){
    alert("Certo. Vamos prosseguir com a operação.");
}else{
    alert("Tudo bem, você pode retornar mais tarde e prosseguiremos com as operações.");
}