(function () {
  // Seleciona o header principal do site
  const header = document.querySelector('.site-header');

  // Se não existir header no HTML, interrompe o script
  if (!header) return;

  // Guarda a posição anterior do scroll
  let lastScrollY = window.scrollY;

  // Tolerância para evitar alternâncias em micro movimentos
  const tolerance = 3;

  // Evento disparado sempre que o usuário rola a página
  window.addEventListener(
    'scroll',
    () => {
      // Posição atual do scroll
      const currentScrollY = window.scrollY;

      // Diferença entre scroll atual e anterior
      const diff = currentScrollY - lastScrollY;

      // 🟢 REGRA 1: topo da página
      // Header sempre visível e sem estados
      if (currentScrollY <= 0) {
        header.classList.remove('scrolled', 'hide');
        lastScrollY = currentScrollY;
        return;
      }

      // 🟡 REGRA 2: saiu do topo
      // Aplica estilo de header "compactado"
      header.classList.add('scrolled');

      // 🛑 REGRA 3: tolerância
      // Ignora micro variações de scroll
      if (Math.abs(diff) < tolerance) return;

      // 🔻 REGRA 4: direção do scroll
      if (diff > 0) {
        // Scroll para baixo → esconder header
        header.classList.add('hide');
      } else {
        // Scroll para cima → mostrar header
        header.classList.remove('hide');
      }

      // Atualiza o estado do scroll anterior
      lastScrollY = currentScrollY;
    },
    {
      // Indica que o listener NÃO irá bloquear o scroll
      passive: true
    }
  );
})();
