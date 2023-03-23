// GERAR O PDF DE RESPONSABILIDADE

function gerarDoc() {
    let nome = document.getElementById("nome").value;
    let nomeEmp = document.getElementById("nomeEmp").value;
    let cnpj = document.getElementById("cnpj").value;
    let nacionalidade = document.getElementById("nacionalidade").value;
    let estadoCivil = document.getElementById("estadoCivil").value;
    let profissao = document.getElementById("profissao").value;
    let cpf = document.getElementById("cpf").value;
    let pis = document.getElementById("pis").value;
    let time1 = document.getElementById("time1").value;
    let time2 = document.getElementById("time2").value;
    let local = document.getElementById("local").value;

    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;


    let dataCont = document.getElementById("dataCont").value;
    let dataContFormatada = dataCont.split('-').reverse().join('/');




    document.getElementById("dockgen1").innerHTML = ` ${nomeEmp}, declaramos para todos os fins que o(a) Sr(a) ${nome}, ${nacionalidade}, ${estadoCivil}, profissão: ${profissao}, inscrito(a) no CPF sob o nº: ${cpf} e Pis nº ${pis} trabalha nesta empresa, com vínculo de emprego desde ${dataContFormatada}. O referido funcionário ocupa o cargo de ${profissao}, com jornada de ${time1} às ${time2}`;


    document.getElementById("dockgen2").innerHTML = `${local}, ${day} de ${month} de ${year}`;

    
    document.getElementById("dockgen3").innerHTML = `<strong> Assinatura: <br> </strong> ${nomeEmp} <br> ${cnpj}`;

};


function mascaraCpf(i){
   
    let v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }
function mascaraCnpj(i){
   
    let v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "18");
    if (v.length == 2 || v.length == 6) i.value += ".";
    if (v.length == 10) i.value += "/";
    if (v.length == 15) i.value += "-";
 
 }
