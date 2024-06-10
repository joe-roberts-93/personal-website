document.addEventListener("DOMContentLoaded", function() {
  const developer = document.querySelector(".developer");
  const bawdy = document.querySelector(".bawdy")
  const overlay = document.querySelector(".overlay-linear-gradient")
  const heroContainer = document.querySelector(".heroContainer")
  var devAnimationExecuted = false
  function isScrolledPast(element){
    const rect = element.getBoundingClientRect();
    return rect.bottom <= 0
  }
  function checkDevPosition() {
    if (!devAnimationExecuted){
    if (isScrolledPast(developer)) {
      bawdy.classList.add("background-yellow")
      overlay.style = ""
      overlay.classList.add("background-yellow")
      heroContainer.classList.add("background-yellow")
      devAnimationExecuted = true
    }
  }
  }
  window.addEventListener('scroll', checkDevPosition);
});
