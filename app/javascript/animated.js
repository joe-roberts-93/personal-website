document.addEventListener("DOMContentLoaded", function() {
  const isMobile = window.matchMedia("only screen and (max-width: 992px)").matches;
  const introSection = document.querySelector(".redesign");
  const web = document.querySelector(".web");
  const developer = document.querySelector(".developer");
  const webTrigger = introSection.clientHeight * 0.02229607250755287;
  const developerTrigger = introSection.clientHeight * 0.04740181268882175
  const introSectionHeight = introSection.clientHeight;
  var animationExecuted = false;

  window.addEventListener("scroll", function() {

    const scrollTop = window.scrollY;

    if (scrollTop >= webTrigger && !isMobile){

      web.classList.add("move-web-left");
    }

    if (scrollTop >= developerTrigger && !isMobile){
      developer.classList.add("move-developer-left");
    }

    if (!animationExecuted && scrollTop <= introSectionHeight) {
      var opacity = isMobile? (scrollTop / introSectionHeight) * 2 : (scrollTop / introSectionHeight) * 2;

      document.querySelector(".overlay-linear-gradient").style.background = `linear-gradient(to bottom, rgba(181, 246, 186,${opacity}),rgba(181, 246, 186,1))`;
      if (opacity >= 1) {
        animationExecuted = true;
      }
    }
  });
})
