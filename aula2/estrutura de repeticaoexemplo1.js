let nomes = ["Alana", "Alexia", "Samanta", "Thiago", "Ordilei"]
//              0         1         2         3          4

// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);
// console.log(nomes[3]);
// console.log(nomes[4]);


// for (let contador = 0; contador < nomes.length; contador++) {
//     const cadaElement = nomes[contador];
//     console.log(cadaElement);
// }


// nomes.forEach(cadaElement => {
//     console.log(cadaElement);
// });


// // mostra a posicao dos elementos
// nomes.forEach((cadaElement, posicao) => {
//     console.log(posicao, cadaElement);
// });


const frutas = ["Pera", "Uva", "Maca", "Salada Mista"]

// for (let contador = 0; contador < frutas.length; contador++) {
//     const cadaElement = frutas[contador];
//     console.log(contador, cadaElement);
// }


// frutas.forEach(cadaElement => {
//     console.log(cadaElement);
// });



// let salary = 1000;
// let contador = 0;

// while (salary < 5000) {
//     salary += 100        //salary = salary + 100;
//     contador++;

//     console.log("Seu salario ainda é R$" + salary);
// }
//     console.log(contador);



// primeiro executa depois verifica com o dowhile
// do {
//     salary += 100;
//     contador++;
//     console.log("Seu salario ainda é R$" + salary);
// } while (salary < 5000);

// console.log(contador);



const prompt = require(`prompt-sync`)()

// let numeroEscolhido; 
// do {
//     numeroEscolhido = prompt("Digite um numero: ");

// } while (numeroEscolhido != "5");
// console.log("Acertou");


// while (numeroEscolhido != "5") {
//     numeroEscolhido = prompt("Digite um numero: ");
//     console.log("Acertou");
// }



// let senha;
// do {
//      senha = prompt("Digite sua senha: ")

//      if (senha != 123) {
//         console.log("Senha incorreta!!!");
//      }

// } while (senha != "123" );
// console.log("Senha correta!!!");


function mostrarSalario() {
   let salary = 1000;
let contador = 0;

while (salary < 5000) {
    salary += 100        //salary = salary + 100;
    contador++;

    console.log("Seu salario ainda é R$" + salary);
}
    console.log(contador);
}

function mostrarFrutas(listafrutas) {
   listafrutas.forEach(element => {
      console.log(element);
   })
   
}

function mostrarNomes(listaNomes) {
   listaNomes.forEach(element => {
      console.log(element);
   });
}

// mostrarNomes(nomes)

function avaliarSenha() {
   let usuario = {
      senha:"",
      nome:""

   };
   do {
      usuario.senha = prompt("Digite sua senha: ")
      usuario.nome = prompt ("Digite seu nome: ")
      if (usuario.senha != 123 || usuario.nome!= "Marcel") {
         console.log("Senha incorreta!!!");
      }

   } while (usuario.senha != "123" || usuario.nome!="Marcel");
   console.log("Senha correta!!!");
}

// avaliarSenha()

let resposta = prompt("Digite um numero: ")

if(resposta==1){
   mostrarNomes(nomes)
}else if (resposta==2) {
   avaliarSenha()
}else if (resposta==3) {
   mostrarFrutas(frutas)
}else if (resposta==4) {
   mostrarSalario()
}
