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


// GERAR O PDF DE CONFIDENCIALIDADE

function gerarDoc() {
    let nome = document.getElementById("nome").value;
    let nacionalidade = document.getElementById("nacionalidade").value;
    let estadoCivil = document.getElementById("estadoCivil").value;
    let profissao = document.getElementById("profissao").value;
    let cpf = document.getElementById("cpf").value;
    let local = document.getElementById("local").value;
    let data = document.getElementById("data").value;
    let dataFormatada = data.split('-').reverse().join('/');




    document.getElementById("dockgen1").innerHTML = nome + ", " + nacionalidade + ", " + estadoCivil + ", " + profissao + ", " + cpf;
    document.getElementById("dockgen2").innerHTML = local + " " + dataFormatada;
    document.getElementById("dockgen3").innerHTML = "<strong> Assinatura: <br> </strong>" + nome;

};

function visualizarLogo() {
    let logo = document.getElementById("logo");
    let imgLogo = document.getElementById("imgLogo");
    let imgLogo2 = document.getElementById("imgLogo2");
    let leitor = new FileReader();

    leitor.onload = function (evento) {
        imgLogo.src = evento.target.result;
        imgLogo2.src = evento.target.result;
    };

    leitor.readAsDataURL(logo.files[0]);

};



function abrirpdf() {
    const conteudo = document.getElementById('conteudo-pdf').innerHTML;
    const win = window.open('', '', 'height=700, width=700')
    win.document.write(conteudo)
    win.print()
}

localStorage.setItem('isLoggedin', true);


function logoff() {
    localStorage.removeItem('isLoggedin');
    window.location.href = 'login.html';
}

// Menu mobile

function navBars(){
    let display = document.getElementById('sidebar').style.display;
    let iconBars = document.getElementById('bars-icon').style.display;
    let btnClose = document.getElementById('btn-close-bar').style.display;

    if(display == "none" && iconBars == "block" && btnClose == "none"){
        document.getElementById('sidebar').style.display= "block";
        document.getElementById('bars-icon').style.display= "none";
        document.getElementById('btn-close-bar').style.display= "block";

    }else{
        document.getElementById('sidebar').style.display= "none";
        document.getElementById('bars-icon').style.display= "block";
        document.getElementById('btn-close-bar').style.display= "none";

    }
}
