// Função para adicionar animação de fade-in quando as seções entram na tela
document.addEventListener("scroll", function () {
    const tutorials = document.querySelectorAll(".tutorial");
    tutorials.forEach((tutorial) => {
        const position = tutorial.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            tutorial.classList.add("active");
        }
    });
});

// Função que é chamada quando o link de phishing é clicado
function showAlert() {
    const alertBox = document.getElementById('phishing-alert');
    alertBox.style.display = 'block';
  }
  
  // Função para fechar o alerta e redirecionar para uma página
  function closeAlert() {
    const alertBox = document.getElementById('phishing-alert');
    alertBox.style.display = 'none';
  
    // Redireciona para uma página específica
    window.location.href = 'phishingoficial.html'; // Substitua pelo seu link desejado
  }
  