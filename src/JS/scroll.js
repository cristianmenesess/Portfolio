document.addEventListener("DOMContentLoaded", function () {
    const setaParaBaixo = document.querySelector(".scroll");
  
    // Esconde a seta para baixo inicialmente
    setaParaBaixo.style.opacity = "10";
  
    // Função para verificar se o usuário rolou para baixo
    function verificarRolagem() {
      if (window.scrollY > 0) {
        // Se o usuário tiver rolado para baixo, esconde a seta
        setaParaBaixo.style.opacity = "0";
        // Remove o event listener para não verificar mais
        window.removeEventListener("scroll", verificarRolagem);
      }
    }
  
    // Adiciona um event listener para verificar a rolagem
    window.addEventListener("scroll", verificarRolagem);
  });
  