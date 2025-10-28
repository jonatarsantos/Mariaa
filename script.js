// Exemplo básico de funcionalidade com JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Aqui você pode adicionar funcionalidades, como validação de formulário, 
    // ou interações com o usuário, como enviar alertas ou alterar o conteúdo dinamicamente.
    
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Você clicou no botão!');
        });
    });
});
