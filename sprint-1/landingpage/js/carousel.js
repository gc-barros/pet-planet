const slides = document.querySelectorAll('[data-js="carousel__item"]');
const nextButton = document.querySelector('[data-js="carousel__button--next"]');
const prevButton = document.querySelector('[data-js="carousel__button--prev"]');

const lastSlideIndex = slides.length - 1;
let currentSlideIndex = 0;

const servicos = ['Acompanhamento veterinário', 'Banho completo', 'Tosa e corte de unhas', 'Adestramento especializado', 'Transporte de pets', 'Passeador de cães'];

const renderServico = correctSlideIndex => {
  document.querySelector('.carousel > h1').innerHTML = servicos[correctSlideIndex];
}

// Sincronizar imagem com option escolhida no select

const comboServicos = document.getElementById("servico");

comboServicos.addEventListener('change', () => {
  currentSlideIndex = comboServicos.selectedIndex;
  manipulateSlidesClasses(currentSlideIndex);
});

const manipulateSlidesClasses = correctSlideIndex => {
  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible');
  });

  slides[currentSlideIndex].classList.add('carousel__item--visible');
  comboServicos.selectedIndex = currentSlideIndex;
  renderServico(currentSlideIndex);
}

nextButton.addEventListener('click', () => {
  const correctSlideIndex = currentSlideIndex === lastSlideIndex
    ? currentSlideIndex = 0
    : ++currentSlideIndex;

  manipulateSlidesClasses(correctSlideIndex);
});

prevButton.addEventListener('click', () => {
  const correctSlideIndex = currentSlideIndex === 0
    ? currentSlideIndex = lastSlideIndex
    : --currentSlideIndex;

  manipulateSlidesClasses(correctSlideIndex);
});