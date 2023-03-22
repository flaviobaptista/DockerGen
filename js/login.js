const user1 = {
    nome: 'usertest@dockergen.com',
    senha: 'dockergen2',
}

document.getElementById('user').value = user1.nome
document.getElementById('password').value = user1.senha

function validarLogin() {
    let usuario = document.getElementById('user').value;
    let senha = document.getElementById('password').value;

    if (usuario == "usertest@dockergen.com" && senha == "dockergen2") {
        window.location.replace('home.html')
    } else if (usuario == "" && senha == "") {
        const warning = document.getElementById('false-log');
        document.getElementById('false-log').innerHTML = "Preencha todos os campos corretamente para acessar";
        let inputUser = document.getElementById('user');
        let inputSenha = document.getElementById('password');

        warning.style.color = "salmon"
        warning.style.fontSize = "16pt"
        inputUser.style.borderColor = "salmon"
        inputUser.style.backgroundColor = "salmon"
        inputSenha.style.borderColor = "salmon"
        inputSenha.style.backgroundColor = "salmon"

    } else if (usuario == "") {
        const warning = document.getElementById('false-log');
        document.getElementById('false-log').innerHTML = "Preencha o usuario corretamente!";
        let inputUser = document.getElementById('user');

        warning.style.color = "salmon"
        warning.style.fontSize = "16pt"
        inputUser.style.borderColor = "salmon"
        inputUser.style.backgroundColor = "salmon"
    } else if (senha == "") {
        const warning = document.getElementById('false-log');
        document.getElementById('false-log').innerHTML = "Preencha a senha corretamente!";
        let inputSenha = document.getElementById('password');

        warning.style.color = "salmon"
        warning.style.fontSize = "16pt"
        inputSenha.style.borderColor = "salmon"
        inputSenha.style.backgroundColor = "salmon"
    }else {
        const warning = document.getElementById('false-log');
        document.getElementById('false-log').innerHTML = "Usuario ou senha incorreto!";
        warning.style.color = "salmon"
        warning.style.fontSize = "16pt"
    }

    
}

