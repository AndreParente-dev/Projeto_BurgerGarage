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

meubotao.addEventListener('click', function () {
  mensagem.textContent = "nossa história começou em 2020 com a missão  de oferecer os melhores hambúrgueres artesanais da região, utilizando ingredientes de alta qualidade.";
});


(function () {
  const btn = document.getElementById('btnTopo');
  if (!btn) return;

  const mostrarApos = 250;

  function onScroll() {
    if (window.scrollY > mostrarApos) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }

  function voltarAoTopo(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', voltarAoTopo);
  btn.addEventListener('keydown', function (ev) {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      voltarAoTopo(ev);
    }
  });

  document.addEventListener('DOMContentLoaded', onScroll);
})();
