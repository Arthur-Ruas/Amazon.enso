const senha = document.getElementById("senha"),
      confSenha = document.getElementById("confSenha")

const btnMostrar = document.getElementById("btnMostrar"),
      btnSubmit = document.getElementById("btnSubmit")

btnMostrar.addEventListener("click", () => {

    if(senha.type == "password"){
        senha.type = "text";
        confSenha.type = "text";
    }
    else{
        senha.type = "password";
        confSenha.type = "password";
    }
})

btnSubmit.addEventListener("click", () =>{
    if(senha.value != confSenha.value){
        alert("Senha Incorreta.")
    }
})

