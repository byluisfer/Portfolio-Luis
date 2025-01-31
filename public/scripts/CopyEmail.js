document.getElementById("CopyBtn").addEventListener("click", function() {
    // Obtener el texto del email
    var emailText = document.getElementById("EmailText").textContent;

    // Crear un elemento de entrada temporal
    var tempInput = document.createElement("input");
    tempInput.value = emailText;
    document.body.appendChild(tempInput);

    // Seleccionar el texto y copiarlo
    tempInput.select();
    document.execCommand("copy");

    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);

    // Mostrar un mensaje visual (opcional)
    this.textContent = "Kopiert!";
    setTimeout(() => { this.textContent = "Kopieren"; }, 2000);
});