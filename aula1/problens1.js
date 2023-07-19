let prompt = require("prompt-sync")()


// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

// let nomeUsuario = prompt("Digite seu usuario: ")
// let senha = prompt("Digite sua senha: ")

// if(nomeUsuario =="admin" && senha == "senha123"){
//   console.log("Seu login foi bem sucedido!!!")
// }else{
//   console.log("Seu login nao foi bem sucedido!!!")
// }


// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

// let numero = parseInt (prompt("Digite um número de 1 á 7: "))

// if(numero == 1){
//   console.log("Segunda-feira")
// }
// else if(numero == 2){
//   console.log("Terca-feira")
// }
// else if(numero == 3){
//   console.log("Quarta-feira")
// }
// else if(numero == 4){
//   console.log("Quinta-feira")
// }
// else if(numero == 6){
//   console.log("Sexta-feira")
// }
// else if(numero == 7){
//   console.log("Sabado")
// }
// else (numero == 8){
//   console.log("Domingo")
// }


// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

// let numero1 = parseInt (prompt("Digite um número: "))
// let numero2 = parseInt (prompt("Digite mais um número: "))
// let numero3 = parseInt (prompt("Digite mais um número: "))

// if(numero2 > numero1 && numero3 > numero2){
//   console.log("Os números estao em ordem crescente!!!")
// }
// else if(numero2 < numero1 && numero3 < numero2) {
//   console.log("Os números estao em ordem decrescente!!!")
// }
// else{
//   console.log("Os números nao sao crescente nem decrescente!!!");
// }


// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.


// let anoNasc = prompt("Digite seu ano de nascimento: ")
// let anoAtual =  new Date().getFullYear();
// let idade = anoAtual - anoNasc

// if(idade >=18 ){
  
//   console.log(`Voce é maior de idade, voce tem ${idade} anos.`);
// }
// else{
//   console.log("Voce ainda nao atingiu a maioridade!!!");
// }


// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

let valorCompra = parseInt(prompt("Valor total da compra:"))
let desconto1 = parseInt (valorCompra*0.9)
let desconto2 = parseInt (valorCompra*0.8)

if(valorCompra<=100){
  console.log("Voce nao tem direito a desconto!!!");
}
else if(valorCompra>100 && valorCompra<=200){
 
  console.log(`Voce tera desconto de 10%, sua compra ficara no valor de  ${desconto1} reais.`);
}
else{
  console.log(`Voce tera um desconto de 20%, sua compra ficara no valor de ${desconto2}`);
}