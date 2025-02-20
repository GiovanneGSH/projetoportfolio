//console.log() serve para enviar mensagens por meio do console, é util para debugar o código

// a função alert serve para exibir uma mensagem de alerta ao usuário

// alert('Mensagem de alerta');

// console.log('Mensagem no console');

// prompt('Qual o seu nome? ');

// let nome = 'Ingrid';

// var idade = 26;

// const cpf = '123.123.456-67';


let nome = prompt("Qual o seu nome? ");

alert("O seu nome é " + nome);

let idade = prompt("Olá, " + nome + ". Qual a sua idade? ");

let aniversario = prompt("Você já fez aniversário em 2025? ");

if (aniversario == "sim"){
    let nascimento = 2025 - idade;
    alert("Você nasceu em " + nascimento);
}
else if (aniversario == "não"){
    let nascimento = 2024 - idade;
    alert("Você nasceu em " + nascimento);
}
else{
    alert("Resposta inválida, tente de novo.");
}