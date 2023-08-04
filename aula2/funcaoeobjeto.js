let nomes = ["Alana", "Alexia", "Samanta", "Thiago", "Ordilei"]



const frutas = ["Pera", "Uva", "Maca", "Salada Mista"]





const prompt = require(`prompt-sync`)()




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