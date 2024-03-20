document.addEventListener("DOMContentLoaded", function () {
    const conteudoParaEsconder = document.querySelectorAll(".projects, footer");
  
    // Esconde o conteúdo inicialmente
    conteudoParaEsconder.forEach(function(elemento) {
      elemento.style.opacity = "0";
      elemento.style.visibility = "hidden";
      elemento.style.transition = "opacity 1s ease";
    });
  
    // Função para verificar se o usuário rolou para baixo
    function verificarRolagem() {
      if (window.scrollY > 0) {
        // Se o usuário tiver rolado para baixo, mostra o conteúdo
        conteudoParaEsconder.forEach(function(elemento) {
          elemento.style.opacity = "1";
          elemento.style.visibility = "visible";
        });
        // Remove o event listener para não verificar mais
        window.removeEventListener("scroll", verificarRolagem);
      }
    }
  
    // Adiciona um event listener para verificar a rolagem
    window.addEventListener("scroll", verificarRolagem);
  });
  