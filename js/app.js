function validarLogin() {
    let usuario = document.getElementById('user').value;
    let senha = document.getElementById('password').value;

    if (usuario == "" || senha == "") {
        let warning = document.getElementById('false-email');
        document.getElementById('false-email').innerHTML = "Preencha todos os campos para acessar";
        let inputUser = document.getElementById('user');
        let inputSenha = document.getElementById('password');
        let formulario = document.getElementById('formulariolog');

        formulario.action = "#"
        warning.style.color = "salmon"
        warning.style.fontSize = "16pt"
        inputUser.style.borderColor = "salmon"
        inputUser.style.backgroundColor = "salmon"
        inputSenha.style.borderColor = "salmon"
        inputSenha.style.backgroundColor = "salmon"

        setTimeout(function() {
            let formulario = document.getElementById('formulariolog');

            formulario.action = "?#"
            location.reload();
          }, 3000);

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




    document.getElementById("dockgen1").innerHTML =
        nome + ", " + nacionalidade + ", " + estadoCivil + ", " + profissao + ", " + cpf;
    document.getElementById("dockgen2").innerHTML = local + " " + dataFormatada;
    document.getElementById("dockgen3").innerHTML = "<strong> Assinatura: <br> </strong>" + nome;

};

function visualizarLogo() {
    let logo = document.getElementById("logo");
    let imgLogo = document.getElementById("imgLogo");
    let leitor = new FileReader();

    leitor.onload = function (evento) {
        imgLogo.src = evento.target.result;
    };

    leitor.readAsDataURL(logo.files[0]);

};


const btn_imp = document.getElementById("btn_imp");

btn_imp.addEventListener('click', (evnt) => {
    const conteudo = document.getElementById('conteudo-pdf').innerHTML;
    const win = window.open('', '', 'height=700, width=700')
    win.document.write(conteudo)
    win.print()
})