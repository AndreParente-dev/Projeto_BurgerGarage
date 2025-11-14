const imagem = document.querySelector("#fotoDestaque");

imagem.onmouseover = function () {
  imagem.style.opacity = "0.7";
  imagem.style.border = "3px solid red";
  imagem.style.transform = "scale(1.1)";
  imagem.style.transition = "all 0.3s ease";
};

imagem.onmouseout = function () {
  imagem.style.opacity = "1";
  imagem.style.border = "none";
  imagem.style.transform = "scale(1)";
};

const meubotao = document.getElementById('meubotao');
const mensagem = document.getElementById('mensagem'); 

meubotao.addEventListener('click', function() {
    mensagem.textContent = "nossa história começou em 2020 com a missão  de oferecer os melhores hambúrgueres artesanais da região, utilizando ingredientes de alta qualidade.";
});