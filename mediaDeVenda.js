//Calcular média a partir de venda a partir dos valores vendidos

/** Formatos de declaração de var
var valor1;
valor1 = 50;

var valor1 = 50;

valor1 = 50;

var valor1, valor2;

var valor1;
var valor2;
*/

var vendedor, jan, fev, mar, media;

vendedor = prompt("Informe o nome do vendedor(a): ", "Digite aqui");
jan = prompt("Informe o valor das vendas em Janeiro R$: ", "Digite aqui");
fev = prompt("Informe o valor das vendas em Fevereiro R$: ", "Digite aqui");
mar = prompt("Informe o valor das vendas em Março R$: ", "Digite aqui");
media = ((parseFloat(jan) + parseFloat(fev) + parseFloat(mar))/3) //Quando utiliza-se o coamando prompt, as variavéis são armazenadas como string, o comando parseFloat converte os nmrs para ponto flutuantes (n decimal)
alert("A média de vendas do vendedor(a)" + " " + vendedor + " " + "no primeiro trimestre de 2020 foi de: " + "R$ " + media);