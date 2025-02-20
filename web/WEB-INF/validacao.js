/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


<script>
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        let usuario = document.getElementById("usuario").value.trim();
        let senha = document.getElementById("senha").value.trim();

        if (usuario === "" || senha === "") {
            alert("Todos os campos devem ser preenchidos!");
            event.preventDefault(); // Impede o envio do formulário
        } else {
            alert("Login realizado com sucesso!");
        }
    });

    // Adicionando funcionalidade ao botão "Salvar"
    document.querySelector(".btn-success").addEventListener("click", function() {
        alert("Dados salvos!");
    });
});
</script>
