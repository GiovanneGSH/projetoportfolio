
let nome = document.getElementById("nome");

let email = document.getElementById("email");

let telefone = document.getElementById("telefone");

let paragrafo = document.getElementById("mensagemObt");


function verificarCampos(event) {
    event.preventDefault();
    if (nome.value == '' || telefone.value == '' || email.value == '') {
        // alert("Preencha todos os campos!");
        paragrafo.innerText = "Preencha todos os campos!";
    }

    else {
        paragrafo.innerText = "Formulário enviado!";
    }

};

