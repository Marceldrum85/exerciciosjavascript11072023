 let prompt = require("prompt-sync")()


let name = prompt("Digite seu nome: ")
let cargo = prompt("Digite seu cargo: ")

let salary = parseInt(prompt("Digite seu salário: "))

if(salary < 1000){
  salary = parseInt(salary*1.1)
}

console.log(`O funcionario ${name}, com a funcao ${cargo} tem um salario de ${salary}` )


let salary = parseInt(prompt("Digite seu salário: "))

if(salary < 500){
  salary = parseInt(salary*1.3)
  console.log(`novo salario ajustado e ${salary}`)
}else{
    console.log("nao tem direito de aumento")
}


let nota1 = parseInt(prompt("digite sua primeira nota: "))
let nota2 = parseInt(prompt("Digite sua segunda nota: "))
let nota3 = parseInt(prompt("Digite sua terceira nota: "))
let nota4 = parseInt(prompt("Digite sua quarta nota: "))

let media = ( (nota1 + nota2 + nota3 + nota4) / 4)

if(media >= 7){
    console.log(`aprovado sua media foi de ${media}`)
}else if( media < 7 && media >=5) {
    console.log(`recuperacao sua media foi de ${media}`)
}else{
    console.log("Reprovado")
}

