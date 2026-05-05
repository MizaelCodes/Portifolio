const toggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('nav-links');

        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        const modal = document.getElementById('modal-orcamento');
        const abrir = document.getElementById('abrir-modal');
        const fechar = document.querySelector('.close');

        abrir.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        fechar.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        document.getElementById('form-orcamento').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', this)
        .then(() => {
            alert('Mensagem enviada com sucesso!');
        }, (error) => {
            alert('Erro ao enviar: ' + error.text);
        });
});