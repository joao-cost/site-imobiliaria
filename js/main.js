document.addEventListener('DOMContentLoaded', function() {
    // Função para expandir detalhes do apartamento
    document.querySelectorAll('.btn-ver-mais').forEach(button => {
        button.addEventListener('click', function() {
            const detalhes = this.closest('.apartamento').querySelector('.detalhes-apartamento');
            detalhes.style.display = detalhes.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Função para mostrar fotos
    document.querySelectorAll('.btn-ver-fotos').forEach(button => {
        button.addEventListener('click', function() {
            const galeria = this.closest('.detalhes-apartamento').querySelector('.galeria-fotos');
            galeria.style.display = galeria.style.display === 'none' ? 'grid' : 'none';
        });
    });
});