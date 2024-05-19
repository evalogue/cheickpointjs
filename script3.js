var email = document.forms['form']['email'];
var password = document.forms['form']['password'];


var erreur_email = document.getElementById('erreur_email');
var passe_erreur = document.getElementById('passe_erreur');

function validated(){
    if (email.value.lenth < 9) {
        email.style.border = "1px solid red";
        erreur_email.style.display = "block";
        email.focus();
        return false;
    }

    if (password.value.lenth < 6) {
    password.style.border = "1px solid red";
    passe_erreur.style.display = "block";
    password.focus();
    return false;
    }
}
