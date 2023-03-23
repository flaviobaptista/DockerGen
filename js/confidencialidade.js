
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
