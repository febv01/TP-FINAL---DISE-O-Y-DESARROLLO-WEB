document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const bullets = document.querySelectorAll('.bullet');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  let currentSlide = 0;

  function showSlide(index, direction) {
    slides[currentSlide].classList.remove('current');
    bullets[currentSlide].classList.remove('current');

    slides[currentSlide].classList.add(direction === 'next' ? 'exit-left' : 'exit-right');
    slides[index].classList.add(direction === 'next' ? 'enter-right' : 'enter-left');

    setTimeout(() => {
      slides[currentSlide].classList.remove('exit-left', 'exit-right');
      slides[index].classList.remove('enter-left', 'enter-right');

      currentSlide = index;

      slides[currentSlide].classList.add('current');
      bullets[currentSlide].classList.add('current');
    }, 1000);
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex, 'next');
  }

  function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex, 'prev');
  }

  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      if (index !== currentSlide) {
        let direction = index > currentSlide ? 'next' : 'prev';
        showSlide(index, direction);
      }
    });
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
  });
});
