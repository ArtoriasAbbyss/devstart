// Adiciona efeito de clique nos botões
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    alert(`Você clicou em "${button.textContent}"!`);
  });
});

// Rolagem suave para as seções
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});