
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var scrollTop = window.scrollY;
    var introSection = document.querySelector(".redesign");
    var web = document.querySelector("#web");
    var developer = document.querySelector("#developer");

    // Have both #web and #developer start moving left at 0.04229607250755287
    // By 0.05740181268882175, web should be at 50% left
    // By 0.07150755287009063, developer should be at 50% left
    if (introSection) {
      var introSectionHeight = introSection.clientHeight;

      if (scrollTop <= introSectionHeight) {
        console.log(scrollTop / introSectionHeight);
        var opacity = (scrollTop / introSectionHeight)*16;
        document.querySelector(".overlay-linear-gradient").style.background = `linear-gradient(to bottom, rgba(74, 27, 109,${opacity}),rgba(74, 27, 109,1))`;
      }

      if (scrollTop >= introSectionHeight * 0.04229607250755287){
      }

      if (scrollTop >= introSectionHeight * 0.8) {
        jobTitle.style.opacity = "1";
      }
    }



  });
});

// Have both #web and #developer start moving at 0.04229607250755287
// Have #web stop moving at 0.05740181268882175
// web.style.left = `${100 - {it needs to start at 0 and reach 50} }%`;
// Have #developer stop moving at 0.07150755287009063
