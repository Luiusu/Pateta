document.addEventListener('DOMContentLoaded', () => {
    const goofyForm = document.getElementById('goofyForm');
    const formMessage = document.getElementById('formMessage');

    goofyForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Limpa mensagens de erro anteriores
        clearErrorMessages();

        // Valida o formulário
        if (validateForm()) {
            // Se a validação for bem-sucedida, exibe mensagem de sucesso
            formMessage.textContent = 'Mensagem enviada com sucesso! O Pateta agradece o contato.';
            formMessage.className = 'success'; // Adiciona classe para estilização de sucesso
            formMessage.classList.remove('hidden'); // Mostra a mensagem
            goofyForm.reset(); // Limpa o formulário
        } else {
            // Se a validação falhar, exibe mensagem de erro
            formMessage.textContent = 'Por favor, preencha todos os campos corretamente.';
            formMessage.className = 'error'; // Adiciona classe para estilização de erro
            formMessage.classList.remove('hidden'); // Mostra a mensagem
        }
    });

    function validateForm() {
        let isValid = true;

        // Validação do campo Nome
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'O nome é obrigatório.';
            isValid = false;
        }

        // Validação do campo E-mail
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex simples para e-mail
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'O e-mail é obrigatório.';
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Por favor, insira um e-mail válido.';
            isValid = false;
        }

        // Validação do campo Mensagem
        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'A mensagem é obrigatória.';
            isValid = false;
        }

        return isValid;
    }

    function clearErrorMessages() {
        document.querySelectorAll('.error-message').forEach(errorSpan => {
            errorSpan.textContent = '';
        });
        formMessage.classList.add('hidden'); // Esconde a mensagem do formulário
    }
});