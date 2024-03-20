document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  function applyCardEffects(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      } else {
        card.style.opacity = "0.5";
        card.style.transform = "scale(0.9)";
      }
    });
  }

  cards.forEach((card, index) => {
    card.addEventListener("mouseenter", function () {
      applyCardEffects(index);
    });
  });

  cards.forEach((card) => {
    card.addEventListener("mouseleave", function () {
      applyCardEffects(-1);
    });
  });
});