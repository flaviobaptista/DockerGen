// GERAR O PDF DE CONFIDENCIALIDADE

function gerarDoc() {
    let nome = document.getElementById("nome").value;
    let nacionalidade = document.getElementById("nacionalidade").value;
    let estadoCivil = document.getElementById("estadoCivil").value;
    let profissao = document.getElementById("profissao").value;
    let cpf = document.getElementById("cpf").value;
    let local = document.getElementById("local").value;
    let data = document.getElementById("data").value;

    const date = new Date(data);
    const diasDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const mesesDoAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const diaSemana = diasDaSemana[date.getUTCDay()];
    const dia = date.getUTCDate();
    const mes = mesesDoAno[date.getUTCMonth()];
    const ano = date.getUTCFullYear();

    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

    document.getElementById("dockgen1").innerHTML = `${nome}, ${nacionalidade}, ${estadoCivil}, ${profissao}, ${cpf}`;
    document.getElementById("dockgen2").innerHTML = `${local}, ${dataFormatada}`;
    document.getElementById("dockgen3").innerHTML = `<strong> Assinatura: <br> </strong>${nome}`;
    document.getElementById("dockgen4").innerHTML = `<strong> Cartão de Todos, ${local} <br> CNPJ:</strong> 38.065.293/0001-68 <br><br>`;
}

function mascaraCpf(i) {
    let v = i.value;
    
    if (isNaN(v[v.length-1])) { 
        i.value = v.substring(0, v.length-1);
        return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length === 3 || v.length === 7) i.value += ".";
    if (v.length === 11) i.value += "-";
}
