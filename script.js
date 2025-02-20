
let nome = document.getElementById("nome");

let email = document.getElementById("email");

let telefone = document.getElementById("telefone");

let mensagem = document.getElementById("mensagem");

let paragrafo = document.getElementById("mensagemObt");

emailjs.init('1_-M8ry8MHGcvMxu7');

function verificarCampos(event) {
    event.preventDefault();
    if (nome.value == '' || telefone.value == '' || email.value == '' || mensagem.value == '') {
        // alert("Preencha todos os campos!");
        paragrafo.innerText = "Preencha todos os campos!";
        paragrafo.style.color = "red";
        paragrafo.style.fontWeight = "bold";
        paragrafo.style.textAlign = "center";
    }

    else {
        paragrafo.innerText = "Formulário enviado!";
        paragrafo.style.color = "#00ff00";
        paragrafo.style.fontWeight = "bold";
        paragrafo.style.textAlign = "center";

        emailjs.send('service_glz97vr', 'template_7roy0l2',
            {
                to_name: nome.value,
                to_email: email.value,
                to_tel: telefone.value,
                to_message: mensagem.value

            }

        );

        nome.value = '';
        email.value = '';
        telefone.value = '';
        mensagem.value = '';

    }

};

