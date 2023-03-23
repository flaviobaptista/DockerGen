

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
    let display = document.getElementById('sidebar').style.display = "none";
    // let btnClose = document.getElementById('btn-close-bar').style.display;

    if(display == "none"){
        document.getElementById('sidebar').style.display= "block";
    }else{
        document.getElementById('sidebar').style.display= "none"

    }
}
function navBarsClose(){
    let display = document.getElementById('sidebar').style.display = "block";
    if(display == "block"){
        document.getElementById('sidebar').style.display= "none";
    }else{
        document.getElementById('sidebar').style.display= "block"
        }
}
