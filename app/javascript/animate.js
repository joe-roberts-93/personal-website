
// document.addEventListener("DOMContentLoaded", function() {
//   let animationExecuted = false;
//   window.addEventListener("scroll", function() {
//     var scrollTop = window.scrollY;
//     var introSection = document.querySelector(".redesign");
//     var web = document.querySelector("#web");
//     var developer = document.querySelector("#developer");

//     // if (web.style.left === "50%") {
//     //   console.log("Animation executed");
//     //   animationExecuted = true;
//     // }


//     // Have both #web and #developer start moving left at 0.04229607250755287
//     // By 0.05740181268882175, web should be at 50% left
//     // By 0.07150755287009063, developer should be at 50% left
//     if (introSection && !animationExecuted) {
//       var introSectionHeight = introSection.clientHeight;
//       var introSectionBottom = introSection.offsetTop + introSectionHeight;

//       if (scrollTop <= introSectionHeight && scrollTop + window.innerHeight < introSectionBottom) {
//         console.log(scrollTop / introSectionHeight);
//         var opacity = (scrollTop / introSectionHeight)*16;
//         document.querySelector(".overlay-linear-gradient").style.background = `linear-gradient(to bottom, rgba(74, 27, 109,${opacity}),rgba(74, 27, 109,1))`;
//       }

//       if (scrollTop >= introSectionHeight * 0.01229607250755287){
//         const maxScrollDistance = introSectionHeight * 0.2 - introSectionHeight * 0.04229607250755287; // Total distance to travel
//         const scrollProgress = Math.min((scrollTop - introSectionHeight * 0.04229607250755287) / maxScrollDistance, 1);
//         const leftPosition = 100 - (50 * scrollProgress); // 100% to 50%
//         web.style.left = `${leftPosition}%`;
//       }

//       if (scrollTop >= introSectionHeight * 0.8) {
//         // jobTitle.style.opacity = "1";
//       }
//     }
//   });
// });

// // Have both #web and #developer start moving at 0.04229607250755287
// // Have #web stop moving at 0.05740181268882175
// // web.style.left = `${100 - {it needs to start at 0 and reach 50} }%`;
// // Have #developer stop moving at 0.07150755287009063

document.addEventListener("DOMContentLoaded", function() {
  let animationExecuted = false; // Flag to track execution state

  window.addEventListener("scroll", function() {
    var scrollTop = window.scrollY;
    var introSection = document.querySelector(".redesign");
    var web = document.querySelector("#web");
    var developer = document.querySelector("#developer");

    if (introSection && !animationExecuted) { // Conditional check
      var introSectionHeight = introSection.clientHeight;
      var introSectionBottom = introSection.offsetTop + introSectionHeight;

      if (scrollTop <= introSectionHeight) {
        console.log(scrollTop / introSectionHeight);
        var opacity = (scrollTop / introSectionHeight) * 16;
        document.querySelector(".overlay-linear-gradient").style.background = `linear-gradient(to bottom, rgba(74, 27, 109,${opacity}),rgba(74, 27, 109,1))`;
      }

      const startWebMove = introSectionHeight * 0.04229607250755287;
      const stopWebMove = introSectionHeight * 0.08740181268882175;
      const startDeveloperMove = introSectionHeight * 0.05740181268882175;

      // Difference should equal fifty so that I can take this away from 100

      if (scrollTop >= startWebMove) {
        if (web.style.left != "50%"){
        console.log("we startin!")
        console.log(scrollTop/introSectionHeight);
        // const maxScrollDistance = introSectionHeight * 0.2 - introSectionHeight * 0.04229607250755287;
        // const scrollProgress = Math.min((scrollTop - introSectionHeight * 0.04229607250755287) / maxScrollDistance, 1);
        // const leftPosition = 100 - (50 * scrollProgress);
        // web.style.left = `${leftPosition}%`;
        const scrollDistanceOfWebAnimation = startWebMove - stopWebMove;
        const webAnimationProgressPercent = 1-(scrollTop-startWebMove)/scrollDistanceOfWebAnimation;
        const amountToMove = 50 * (1 - webAnimationProgressPercent);
        web.style.left = `${100 + amountToMove}%`;
        }
      }
      // if (scrollTop >= startDeveloperMove) {
      //   console.log("we startin DEV!")
      //   const maxScrollDistance = introSectionHeight * 0.25 - introSectionHeight * 0.05740181268882175;
      //   const scrollProgress = Math.min((scrollTop - introSectionHeight * 0.05740181268882175) / maxScrollDistance, 1);
      //   const leftPosition = 100 - (60 * scrollProgress);
      //   developer.style.left = `${leftPosition}%`;
      // }


      if (scrollTop >= introSectionHeight * 0.8) {
        developer.style.opacity = "1"; // Assume 'jobTitle' was a typo
      }

      // Check if the bottom of the div has been reached, then set the flag
      if (developer.style.left === "50%") {
        animationExecuted = true;
      }
    }
  });
});

// Make sure that web.style.left starts at 100% - currently starts at 112 or something
