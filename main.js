document.addEventListener('DOMContentLoaded', () => {
    const goofyForm = document.getElementById('goofyForm');
    const formMessage = document.getElementById('formMessage');

    goofyForm.addEventListener('submit', (event) => {
        event.preventDefault();

        clearErrorMessages();

        if (validateForm()) {
            formMessage.textContent = 'Mensagem enviada com sucesso! O Pateta agradece o contato.';
            formMessage.className = 'success';
            formMessage.classList.remove('hidden');
            goofyForm.reset();
        } else {
            formMessage.textContent = 'Por favor, preencha todos os campos corretamente.';
            formMessage.className = 'error';
            formMessage.classList.remove('hidden');
        }
    });

    function validateForm() {
        let isValid = true;

        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'O nome é obrigatório.';
            isValid = false;
        }

        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'O e-mail é obrigatório.';
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Por favor, insira um e-mail válido.';
            isValid = false;
        }

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
        formMessage.classList.add('hidden');
    }
});
