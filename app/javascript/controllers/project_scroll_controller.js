import { Controller } from "@hotwired/stimulus"

export default class NextProjectController extends Controller {
  nextProject(event) {
    const currentProject = document.querySelector(".is-active-project");
    const nextProject = currentProject.nextElementSibling;

    currentProject.classList.remove("is-active-project")
    currentProject.classList.add("is-hidden-project")
    nextProject.classList.add("is-active-project");
    nextProject.classList.remove("is-hidden-project");
    if (!nextProject.nextElementSibling) {
      document.querySelector(".next-project").style.visibility = "hidden"
    }
    document.querySelector(".previous-project").style.visibility = "visible"
  }

  previousProject(event) {
    console.log("Moving to previous project")
    const currentProject = document.querySelector(".is-active-project");
    const previousProject = currentProject.previousElementSibling;

    currentProject.classList.remove("is-active-project")
    currentProject.classList.add("is-hidden-project")
    previousProject.classList.add("is-active-project");
    previousProject.classList.remove("is-hidden-project");
    if (previousProject.previousElementSibling.classList.contains("button-container")) {
      document.querySelector(".previous-project").style.visibility = "hidden"
    }
    document.querySelector(".next-project").style.visibility = "visible"
  }
}
