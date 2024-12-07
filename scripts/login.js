


const passwordInput = document.querySelector(".password");
const submitInput = document.querySelector(".login");
const forgetPassword = document.querySelector(".forgetPassword");
const alertMessage = document.querySelector(".alertMessage");
// const storedPasswordHash = "e102f95572e59f8e8f4590e6dfd86f64d1dbd9b92ee9847e7875bedcecbe74d9";
const storedPasswordHash = "7bbeea8db68311e680e01510a3bf88e4bc83438dbffce0f4a83607cc6168c215";

console.log(encryptSHA256("240224"))
//CONTROL PARA CUANDO SE OLVIDÓ LA CONTRASEÑA

forgetPassword.addEventListener("click", ()=>{
    Swal.fire({
        title: "¿Has olvidado tu contraseña?",
        text: "Recuerda uno de los dos días más especiales (ddmmaa)",
        icon: "question"
      });
});



//CONTROL INICIAR SESIÓN

function handlePasswordEvent(e) {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
        validatePassword(passwordInput.value);
        e.preventDefault();
    }
}

// Agregar los eventos al botón y al input
submitInput.addEventListener("click", handlePasswordEvent);
passwordInput.addEventListener("keydown", handlePasswordEvent);

// Función para validar la contraseña
function validatePassword(password){
    let inputPasswordHash  = encryptSHA256(password);
    if(inputPasswordHash  == storedPasswordHash){
        window.open("./pages/home.html", "_self");
    }
    else{
        alertMessage.textContent = "Contraseña Incorrecta."
        passwordInput.value="";
    }
}



//FUNCION PARA ENCRIPTAR KEY

function encryptSHA256(text) {
    return CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
  }