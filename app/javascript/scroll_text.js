document.addEventListener("DOMContentLoaded", function() {
  const scrollTexts = document.querySelectorAll('.scroll-text');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const makeVisible = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  scrollTexts.forEach(text => {
    makeVisible.observe(text);
  });

});
