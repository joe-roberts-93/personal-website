document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector(".body")
  const overlay = document.querySelector(".overlay-linear-gradient")
  const heroContainer = document.querySelector(".heroContainer")
  var devAnimationExecuted = false
  function isScrolledPast(element){
    const rect = element.getBoundingClientRect();
    return rect.bottom <= 0
  }
  function checkheroContainerPosition() {
    if (!devAnimationExecuted){
    if (isScrolledPast(heroContainer)) {
      body.classList.add("background-yellow")
      overlay.style = ""
      overlay.classList.add("background-yellow")
      heroContainer.classList.add("background-yellow")
      devAnimationExecuted = true
    }
  }
  }
  checkheroContainerPosition();
  window.addEventListener('scroll', checkheroContainerPosition);
});
