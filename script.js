    const quadrado1 = document.querySelector('.quadrado1');

    quadrado1.addEventListener('click', () => {
      quadrado1.classList.add('clicado');

      quadrado1.addEventListener('animationend', () => {
        quadrado1.classList.remove('clicado');
      }, { once: true });
    });