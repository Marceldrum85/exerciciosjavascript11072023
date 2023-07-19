//Imprimir números pares de 0 a 20 utilizando o loop while.

// let contador = 2;

// while (contador<= 20) {
//     console.log(contador);

//     contador += 2
// }



// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

// let resultado = 0;
// let contador = 1;

// while (contador <= 100) {
//     resultado = resultado + contador;
//     contador++;

//     console.log(resultado);
// }
 

// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.


// const prompt = require(`prompt-sync`)()


// let idade
// do {
//      idade = parseInt(prompt("Digite sua idade: "))
// } while (idade < 18);

// console.log("Maior de 18 anos!!!");


// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.


// const prompt = require(`prompt-sync`)()

// let numero = parseInt(prompt("Digite um numero: "))

// while (numero >= 0) {
//     console.log(numero);
//     numero--;
// }

// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.


const prompt = require(`prompt-sync`)()

let numero 
do {
    numero = prompt("Digite um numero: ")
} while (numero != "0");



