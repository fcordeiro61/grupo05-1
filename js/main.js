document.addEventListener('DOMContentLoaded', () => {
    // Carregar header e footer
    fetch('header.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
        initMobileMenu(); // Inicializa o menu após carregar o header
      });
  
    fetch('footer.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      });
  
    // Mostrar/Ocultar senha
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
  
    if (togglePassword && passwordInput) {
      togglePassword.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
  
        const icon = togglePassword.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-eye');
          icon.classList.toggle('fa-eye-slash');
        }
      });
    }
  
    // Validação do formulário
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const identifier = document.getElementById('identifier');
        const password = document.getElementById('password');
        let valid = true;
  
        // Resetar estilos e mensagens
        [identifier, password].forEach(input => {
          input.classList.remove('is-invalid', 'is-valid');
          const errorMsg = input.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
          }
        });
  
        // Validar identificador
        if (!identifier.value || (!identifier.value.includes('@') && !/^\d{11}$/.test(identifier.value.replace(/\D/g, '')))) {
          identifier.classList.add('is-invalid');
          showError(identifier, 'Informe um e-mail válido ou CPF com 11 dígitos.');
          valid = false;
        } else {
          identifier.classList.add('is-valid');
        }
  
        // Validar senha
        if (!password.value || password.value.length < 6) {
          password.classList.add('is-invalid');
          showError(password, 'A senha deve ter pelo menos 6 caracteres.');
          valid = false;
        } else {
          password.classList.add('is-valid');
        }
  
        if (valid) {
          console.log('Login válido!');
          setTimeout(() => {
            alert('Login realizado com sucesso!');
            // window.location.href = 'dashboard.html';
          }, 1000);
        }
      });
    }
  
    // Exibir mensagem de erro
    function showError(input, message) {
      const error = document.createElement('div');
      error.classList.add('error-message');
      error.textContent = message;
      input.parentNode.appendChild(error);
    }
  });
  
  // Função de menu mobile (fora do DOMContentLoaded para funcionar após fetch)
  function initMobileMenu() {
    const toggleButton = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
  
    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
      });
    }
  }
  