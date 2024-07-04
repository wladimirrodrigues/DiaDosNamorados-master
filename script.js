// Troca de imagens a cada 5 segundos
var index = 0;
var cards = document.getElementsByClassName("card");

function changeImage() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  index = (index + 1) % cards.length;
  cards[index].style.display = "block";
}

window.onload = function () {
  // Esconder todas as imagens inicialmente
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  // Mostrar a primeira imagem
  if (cards.length > 0) {
    cards[0].style.display = "block";
  }

  // Trocar imagens a cada 5 segundos
  setInterval(changeImage, 5000);
};

// Funções para o botão de jantar
function aceitarJantar() {
  alert("Você fez a melhor escolha da sua vida!");
}

function recusarJantar() {
  alert("Que pena! Essa opção não será aceita.");
}
