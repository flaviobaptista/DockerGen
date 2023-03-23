function visualizarUser() {
    let userImg = document.getElementById("user-img");
    let userImg3 = document.getElementById("userImg3");
    let userImg2 = document.getElementById("userImg2");
    let leitor = new FileReader();

    leitor.onload = function (evento) {
        userImg3.src = evento.target.result;
        userImg2.src = evento.target.result;
    };

    leitor.readAsDataURL(userImg.files[0]);

};

const credentialsUser = {
    nome: "Laura Sophia Miller",
    funcao: "Coordenadora Administrativa"
}


let userName = document.getElementById('userName').value = credentialsUser.nome
let job = document.getElementById('cargo').value = credentialsUser.funcao

document.getElementById('nameUser').innerHTML = userName
document.getElementById('spanCredentials').innerHTML = job

function saveUserCredentials() {

    let userName = document.getElementById('userName').value
    let job = document.getElementById('cargo').value

    document.getElementById('nameUser').innerHTML = userName
    document.getElementById('spanCredentials').innerHTML = job
    
    
}